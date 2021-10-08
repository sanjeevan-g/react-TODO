import React from "react";
import "./addnote.scss"
class Addnote extends React.Component {

    constructor(props){
        super(props);
        this.title = React.createRef();
        this.note = React.createRef();
        this.noteOnSubmit = this.noteOnSubmit.bind(this);
    }
    noteOnSubmit(event){
        event.preventDefault();
        let today = new Date();
        let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        let formdata = {
            title: this.title.current.value,
            note: this.note.current.value,
            date: date.toString()
        };
        this.props.sendnotedata(formdata);
    }
    render(){
        return <div className="addnote">
            <div className="container">
                <h2 className="addnote__heading">
                    Add new note
                </h2>
                <div className="addnote__form-wrapper">
                    <form onSubmit={this.noteOnSubmit}>
                        <div className="addnote__form-control">
                        <label className="addnote__form-label" htmlFor="title">
                                Note Title
                            </label>
                            <input type="text" className="addnote__form-input" required id="title" ref={this.title}/>
                        </div>
                        <div className="addnote__form-control">
                            <label className="addnote__form-label" htmlFor="note">
                                Note
                            </label>
                            <textarea id="note" required rows='5' className="addnote__form-textarea " ref={this.note}></textarea>
                        </div>
                        <div className="addnote__form-control">
                            <input type="submit" className="addnote__submit-btn"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default Addnote;