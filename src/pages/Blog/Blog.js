import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='mx-28 my-20'>
            <h2 className='text-2xl'>Q: Difference between SQL and NoSQL</h2>
            <p>SQL:- <br />
                1. RELATIONAL DATABASE MANAGEMENT SYSTEM. <br />
                2. These databases have fixed or static or predefined schema. <br />
                3. These databases are not suited for hierarchical data storage. <br />
                4. These databases are best suited for complex queries. <br />
                NoSQL:- <br />
                1. Non-relational or distributed database system. <br />
                2. They have dynamic schema. <br />
                3. These databases are best suited for hierarchical data storage. <br />
                4. These databases are not so good for complex queries. <br />
                <br />
                <h2 className='text-2xl'>Q: What is JWT, and how does it work?</h2>
                <p>JWT: JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. <br />
                    Working Procedure: <br /> Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.

                </p>
                <br />
                <h2 className='text-2xl'>Q: What is the difference between javascript and NodeJS?</h2>
                <p>Answer: <br />
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </p>
            <br />
            <h2 className='text-2xl'>Q: How does NodeJS handle multiple requests at the same time?</h2>
            <p>Answer: <br />
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blog;