import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormControl, Button} from 'react-bootstrap';
import '../sass/style.scss';

class SearchInput extends Component{
    constructor(props){
    super(props)
    this.state={value: props.value}
    }
    onChange(e) {
        console.log(this.state.value)
        this.setState({value: e.target.value});
        this.props.onChange(this.state.value);
        
    }
    render(){
        return (
        <div>
            <FormControl 
               className="my-search"
               value={this.state.value}
               onChange={this.onChange.bind(this)}
               placeholder="Filmu paieska.."
            />
            <Button className="my-button"
                onClick={this.onChange.bind(this)}>
                Ieškoti filmo
            </Button>
        </div>
        );
    }
}

export default SearchInput;
