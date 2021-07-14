import React from 'react';
import articles from './article-content';
import {Link} from 'react-router-dom';

const ArticleListPage = () => (
    <>
<h1>Articles</h1> 

    { articles.map((articles, key) => (

    <Link className= "article-list-item" key = {key} to = {`/articles/${articles.name}`}>
    <h3>{articles.title}</h3>
    <p>{articles.content[0].substring(0,160)}...</p>

    </Link>
    ))
}

</>
    
);

export default ArticleListPage;