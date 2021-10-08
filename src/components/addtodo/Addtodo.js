import React from "react";
import "./addtodo.scss";

class Addtodo extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            priority:'low',
        }
        this.titleRef = React.createRef();
        this.descRef = React.createRef();
        this.todoListSubmit = this.todoListSubmit.bind(this);
        this.selectValueChange = this.selectValueChange.bind(this);
    }

    todoListSubmit(event){
        event.preventDefault();
        let today = new Date();
        let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        let formdata = {
            title: this.titleRef.current.value,
            description: this.descRef.current.value,
            date: date.toString(),
            isComplete:false,
            priority: this.state.priority
        };
        this.props.sendToDoData(formdata);
    }

    selectValueChange(event) {
        this.setState(()=>({
            priority: event.target.value
        }))
    }

    render() {
        return <div className="addtodo">
            <div className="container">
                <h2 className="addtodo__heading">
                    Add New ToDo
                </h2>
                <div className="addtodo__form-wrapper">
                    <form onSubmit={this.todoListSubmit}>
                        <div className="addtodo__form-control">
                        <label className="addtodo__form-label" htmlFor="title">
                                Todo Title
                            </label>
                            <input type="text" className="addtodo__form-input" required id="title" ref={this.titleRef}/>
                        </div>
                        <div className="addtodo__form-control">
                            <label className="addtodo__form-label">
                                Priority:
                            </label>
                            <select className="addtodo__select-comp" value={this.state.priority} onChange={this.selectValueChange}>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="addtodo__form-control">
                            <label className="addtodo__form-label" htmlFor="description">
                                Description:
                            </label>
                            <textarea id="description" required rows='5' className="addtodo__form-textarea " ref={this.descRef}></textarea>
                        </div>
                        <div className="addtodo__form-control">
                            <input type="submit" className="addtodo__submit-btn"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default Addtodo;