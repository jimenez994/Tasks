import React, { Component } from 'react';
import axios from 'axios';
import './taskList.css';

class taskList extends Component{
    tasks = [];
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            task: {
                title: "",
                description:""
            }
        }
    }
    render(){
        return (
            <div className="taskList">
                {this.state.tasks}
            </div>
        )
    }
    componentDidMount(){
        axios.get("http://localhost:8080/allTasks")
        .then(data => {
            console.log(data)
            for(let task of data.data){
                task = (
                    <div key= {task.id}>
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                    </div>
                )
                this.tasks.push(task);
            }
            this.setState({
                tasks: this.tasks
            })
        })
        .catch(err => console.log(err));
    }
}
export default taskList;