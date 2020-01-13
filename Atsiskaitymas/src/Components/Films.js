import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import '../sass/style.scss';
import {Col, Row, Button, Table} from 'react-bootstrap';

class Films extends Component{
    render(){
        return (
            <div className="filmai">
                <Table striped bordered hover>
                    <tbody className="style-table">
                        <tr>
                        <td className="my-table">Filmo pavadinimas</td>
                        <td>{this.props.films.Title}</td>
                        </tr>
                        <tr>
                        <td className="my-table">Aprašymas</td>
                        <td>{this.props.films.Plot}</td>
                        </tr>
                        <tr>
                        <td className="my-table">Filmo ID</td>
                        <td>{this.props.films.imdbID}</td>
                        </tr>
                        <tr>
                        <td className="my-table">Reitingas</td>
                        <td>{this.props.films.imdbRating}</td>
                        </tr>
                        <tr>
                        <td className="my-table">Trukmė</td>
                        <td>{this.props.films.Runtime}</td>
                        </tr>
                        <tr>
                        <td className="my-table">Režisierius</td>
                        <td>{this.props.films.Director}</td>
                        </tr>
                    </tbody>
                    </Table>  
             </div>
        );
    }
}
export default Films;
