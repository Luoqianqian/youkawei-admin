import { useState } from 'react';
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  formatDate,
} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import Header from '../../components/Header';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { Typography } from 'antd';

const { Title, Text } = Typography;

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  console.log(currentEvents);
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
  };
  return (
    <div className="page-calendar">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <div className="calendar-content">
        <div className="events">
          <Title style={{ color: '#fafafa', marginTop: 0 }} level={4}>
            All Events
          </Title>
          {currentEvents.map((event) => {
            return (
              <div key={event.id} className="event">
                <Text>{event.title}</Text>
                <Text>
                  {formatDate(event.start as Date, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </Text>
              </div>
            );
          })}
        </div>
        <div className="table">
          <FullCalendar
            height="70vh"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            initialView="dayGridMonth"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}*/
          />
        </div>
      </div>
    </div>
  );
}
