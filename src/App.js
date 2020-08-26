import React, { Component } from 'react';
import { Header } from './components';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

// const api = "https://api.nasa.gov/planetary/apod?api_key=pOWSgSWWiU2HNQSa6cnHqRsC2ZbACaxIwlz4HY6p";

const Image = styled.img`
    width: 100%;
`;

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
            <Header/>
                <Container fixed>
                    <h1>{this.state.title}</h1>
                <Image src={this.state.pic} alt="alt"/>
                </Container>
            </div>
        );
    }
}



export default App;
