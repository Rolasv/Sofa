import React, {Component} from 'react';
import Header from './Components/Header';
import SearchInput from './Components/SearchInput';
import Films from './Components/Films';
import {Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      films:[],
      text: '',
      isLoaded: false,
    }
  }
  
  componentDidMount() {
    this.getFilms();
  }
  getFilms(){
    let a= this.state.text;
    fetch('http://www.omdbapi.com/?apikey=ee625c02&t='+a)
    .then(res=> res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        films: json,
      })
    });
   console.log(this.state.films);
  }
  handleChange(text){
    this.setState({text: text}, this.getFilms());
  }
  
render(){
  return (
    <div className="App">
        <Header />
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchInput onChange={this.handleChange.bind(this)} value={this.state.text} />
              <Films films={this.state.films} />
            </Col>
          </Row>
    </div>
  );
}
}

export default App;
