import React from 'react';
import Header from '../../components/Header';
import DayPhoto from '../../components/DayPhoto';

// const api = "https://api.nasa.gov/planetary/apod?api_key=pOWSgSWWiU2HNQSa6cnHqRsC2ZbACaxIwlz4HY6p";

const Main = () => {

    return (
        <div className="App">
            <Header />
            <DayPhoto />
        </div>
    );
}



export default Main;
