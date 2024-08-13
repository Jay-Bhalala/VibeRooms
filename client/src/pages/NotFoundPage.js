import React from 'react';
import Navbar from '../components/Navbar';

const NotFoundPage = () => {
    return (
        <div>
            <Navbar />
            <h1>404: Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;