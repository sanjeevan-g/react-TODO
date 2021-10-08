import React from "react";
import TodoCard from "../todocard/Todocard";
import "./showtodo.scss"

class Showtodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tododata: [],
            sortby: '',
            isUpdate: false
        }
        this.completedtodo = this.completedtodo.bind(this);
        this.deletetodolist = this.deletetodolist.bind(this);
    }
    completedtodo(item) {
        let today = new Date();
        let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        this.setState(preV => ({
            isUpdate: !preV.isUpdate
        }))
        item.isComplete = true;
        item.date = date.toString();
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/todolist/" + item.id + ".json", {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    this.setState(preV => ({
                        isUpdate: !preV.isUpdate
                    }));
                }
            })
    }

    deletetodolist(id) {
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/todolist/" + id + ".json", {
            method: 'DELETE'
        })
            .then(response => {
                if (response.status === 200) {
                    fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/todolist.json")
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            if (data !== null) {
                                let datalist = [];
                                for (const key in data) {
                                    let todo = {
                                        id: key,
                                        ...data[key]
                                    };
                                    datalist.push(todo);
                                }
                                this.setState((preV) => ({
                                    tododata: datalist
                                }))
                            }
                            else{
                                this.setState((preV) => ({
                                    tododata: []
                                }))
                            }

                        })
                }
            });
    }

    componentDidMount() {
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/todolist.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data !== null) {
                    let datalist = [];
                    for (const key in data) {
                        let todo = {
                            id: key,
                            ...data[key]
                        };
                        datalist.push(todo);
                    }
                    this.setState((preV) => ({
                        tododata: datalist
                    }))
                }

            })
    }

    render() {
        return <div className="showtodo">
            <div className="container">
                <label className="showtodo__heading">
                    Added To Do List
                </label>
                <div className="showtodo__content-wrapper">
                    {this.state.tododata.length > 0 ? <TodoCard items={this.state.tododata} markComplete={this.completedtodo}
                        getdeletetodo={this.deletetodolist} /> :
                        <label className="showtodo__nodata">No todo been added</label>
                    }
                </div>
            </div>

        </div>
    }
}

export default Showtodo;