import React from 'react';
import Navbar from '../components/Navbar';
import Timer from '../components/Timer';

const TimerPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Timer</h1>
            <Timer />
        </div>
    );
};

export default TimerPage;