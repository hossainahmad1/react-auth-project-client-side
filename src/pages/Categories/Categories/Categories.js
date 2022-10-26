import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../../News/News/News';

const Categories = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <h4>this si categories has news {news.length}</h4>
            <div>
                {
                    news.map(oneNews => <News
                        key={oneNews.id}
                        oneNews={oneNews}
                    ></News>)
                }
            </div>
        </div>
    );
};

export default Categories;