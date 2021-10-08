import React from "react";
import Notecard from "../notecard/Notecard";
import "./shownotes.scss";

class Shownote extends React.Component {
    constructor() {
        super();
        this.state = {
            notelist: [],
            isupdate: false
        }

        this.updatedValuefromNote = this.updatedValuefromNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    updatedValuefromNote(noteitem) {
        let today = new Date();
        let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        noteitem.date = date.toString();
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/usernote/" + noteitem.id + ".json", {
            method: 'PUT',
            body: JSON.stringify(noteitem),
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
    deleteNote(id) {
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/usernote/" + id + ".json", {
            method: 'DELETE'
        })
            .then(response => {
                if (response.status === 200) {
                    fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/usernote.json")
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
                                    notelist: datalist
                                }))
                            }
                            else{
                                console.log("no notes")
                                this.setState((preV) => ({
                                    notelist: []
                                }))
                            }
                        })
                }
            })
    }
    componentDidMount() {
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/usernote.json")
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
                        notelist: datalist
                    }))
                }
            })
    }
    render() {
        return <div className="shownote">
            <div className="container">
                <h2 className="shownote__header">
                    Added Notes
                </h2>
                <div className="shownote__content-wrapper">
                    {this.state.notelist.length > 0 ?
                        this.state.notelist.map(item => {
                            return <Notecard item={item} key={item.id} getUpdatedValue={this.updatedValuefromNote}
                                getdeletenote={this.deleteNote} />
                        })
                        :
                        <label className="shownote__nodata">No notes been added</label>}
                </div>
            </div>
        </div>
    }
}

export default Shownote;