import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';

export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  /**С помощью хука эффекта useEffect вы можете выполнять побочные эффекты из 
   * функционального компонента. Он выполняет ту же роль, что и componentDidMount, 
   * componentDidUpdate и componentWillUnmount в React-классах, объединив их в 
   * единый API. Вы можете найти сравнение useEffect и этих методов на странице 
   * использование хука эффекта.*/
	/**Метод componentDidMount является еще одним местом, откуда удобно отправлять 
	запросы к API. Он вызывается после отображения компонента на экране, поэтому 
	любые вызовы setState из данного метода приведут к запуску жизненного цикла 
	обновления и к ---повторному отображению компонента на экране---.*/ 
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
