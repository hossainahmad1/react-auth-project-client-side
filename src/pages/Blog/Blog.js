import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h3 className='header-margin'>Answer To The Question;</h3>
            <div className='blog-para'>
                <h4 className='question'> what is cors?</h4>
                <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served</p>
            </div>
            <div className='blog-para'>
                <div className='question'>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
            </div>
            <div className='blog-para'>
                <div className='question'>
                    <h4>How does the private route work?</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div className='blog-para'>
                <div className='question'>
                    <h4>What is Node? How does Node work?</h4>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;