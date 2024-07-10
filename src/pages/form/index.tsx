import React from 'react';
import { Formik, ErrorMessage, Field} from 'formik';
import { Col, Input, Row } from 'antd';
import * as yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
});
const initialValues = {
  userName: '',
  email: '',
  contact: '',
  address: '',
};

import Header from '../../components/Header';

function Form() {
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="page-form">
      <Header title="CREATE USER" subtitle="Create a new user profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, handleBlur, handleChange }) => (
          <form>
            <Row className="row">
              <Col span={24}>
                <Field
                  as={Input}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.userName}
                  name="userName"
                  placeholder="UserName"
                />
                <ErrorMessage className="msg" name="username" component="div" />
              </Col>
            </Row>
            <Row className="row">
              <Col span={24}>
                <Field
                  as={Input}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage className="msg" name="email" component="div" />
              </Col>
            </Row>
            <Row className="row">
              <Col span={24}>
                <Field
                  as={Input}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  placeholder="Contact"
                />
                <ErrorMessage className="msg" name="contact" component="div" />
              </Col>
            </Row>
            <Row className="row">
              <Col span={24}>
                <Field
                  as={Input}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  placeholder="Address"
                />
                <ErrorMessage className="msg" name="address" component="div" />
              </Col>
            </Row>
            <Row className="row">
              <Col push={20} span={4}>
                <button className="submitBtn" type="submit">
                  {' '}
                  CREATE NEW USER{' '}
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;
