import React, { useState } from 'react';
import { Select, Input, List, Divider } from 'antd';

const OPTIONS = [
  {
    value: 'all',
    label: '全部',
  },
  {
    value: 'users',
    label: '用户',
  },
  {
    value: 'orders',
    label: '订单',
  },
  {
    value: 'products',
    label: '商品',
  },
  {
    value: 'articles',
    label: '文章',
  },
];

const { Search } = Input;

interface SearchResult {
  id: number;
  username?: string;
  product_name?: string;
  order_number?: string;
  title?: string;
}
type SearchResults = {
  users: SearchResult[];
  products: SearchResult[];
  orders: SearchResult[];
  posts: SearchResult[];
} | null;

const GlobalSearch: React.FC = () => {
  const [loading, setLoding] = useState(false);
  const [searchResultsData, setSearchResultsData] =
    useState<SearchResults>(null);

  // const onSearch = async (value: string) => {
  //   try {
  //     fetch('https://reqbin.com/echo/get/json', {
  //       headers: {Authorization: 'Bearer {token}'}
  //     })
  //        .then(resp => resp.json())
  //        .then(json => console.log(JSON.stringify(json)))
  //     setSearchResults(response);
  //   } catch (error) {
  //     console.error('Error fetching search results:', error);
  //   }
  // };
  const onSearch = () => {};

  return (
    <div className="global_search">
      <Search
        placeholder="Search users, products, orders, blog posts"
        onSearch={onSearch}
        style={{ minWidth: 260 }}
        loading={loading}
        enterButton
      />
      {searchResultsData && (
        <div className="search_results">
          {searchResultsData.users && (
            <>
              <Divider>用户</Divider>
              <List
                dataSource={searchResultsData.users}
                renderItem={(item) => (
                  <List.Item key={item.id}>{item.username}</List.Item>
                )}
              />
            </>
          )}

          {searchResultsData.products && (
            <>
              <Divider>商品</Divider>
              <List
                dataSource={searchResultsData.products}
                renderItem={(item) => (
                  <List.Item key={item.id}>{item.product_name}</List.Item>
                )}
              />
            </>
          )}

          {searchResultsData.orders && (
            <>
              <Divider>订单</Divider>
              <List
                dataSource={searchResultsData.orders}
                renderItem={(item) => (
                  <List.Item key={item.id}>{item.order_number}</List.Item>
                )}
              />
            </>
          )}

          {searchResultsData.posts && (
            <>
              <Divider>文章</Divider>
              <List
                dataSource={searchResultsData.posts}
                renderItem={(item) => (
                  <List.Item key={item.id}>{item.title}</List.Item>
                )}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
