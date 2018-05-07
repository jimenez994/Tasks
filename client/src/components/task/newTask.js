import React, { Component } from 'react';
import axios from 'axios';
import './newTask.css';

class newTask extends Component {
    state = {
        'title': "",
        'description':""
    }
    handleTitle = event => {
        this.setState({'title': event.target.value})
    }
    handleDescription = event => {
        this.setState({'description': event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault();
        const task = {
            'title': this.state.title,
            'description': this.state.description
        }
        console.log(task)
        axios
            .post('http://localhost:8080/new', task )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return (
            <div className="newTask">
                <form onSubmit={this.handleSubmit}>
                    <label> Title:</label>
                    <input type="text" name="title" onChange={this.handleTitle}/>
                    <label> Description:</label>                    
                    <input type="text" name="description" onChange={this.handleDescription} />                    
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }

}
export default newTask;