import React, { Component } from 'react';
import './App.css';

// const api = "https://api.nasa.gov/planetary/apod?api_key=pOWSgSWWiU2HNQSa6cnHqRsC2ZbACaxIwlz4HY6p";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            pic: null
        }
        // this.getData();
    }


    getData = () => {
        
    }

    componentDidMount() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=pOWSgSWWiU2HNQSa6cnHqRsC2ZbACaxIwlz4HY6p")
        .then(data => data.json())
        .then(data => this.setState({title: data.title, pic: data.url}))
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <iframe width="560" height="315" src={this.state.pic} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        );
    }
}



export default App;
