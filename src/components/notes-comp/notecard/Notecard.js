import React from "react";
import "./notecard.scss"
class Notecard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isupdate: false,
            notedesc: '',
            textAreaValue: '',
        }
        this.textareaChange = this.textareaChange.bind(this);
        this.sendUpdatedValue = this.sendUpdatedValue.bind(this);
        this.upadatedValue = '';
        this.initialLoaded = false
    }

    textareaChange(event) {
        this.setState((prev) => ({
            ...prev,
            textAreaValue: event.target.value
        }))
    }
    componentDidMount() {
        if (!this.initialLoaded) {
            this.setState((prev) => ({
                ...prev,
                textAreaValue: this.props.item.note
            }))
            this.initialLoaded = !this.initialLoaded;
        }

    }
    sendUpdatedValue(item) {
        let today = new Date();
        let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        if (this.state.isupdate) {
            this.setState((preV) => ({
                ...preV,
                isupdate: !preV.isupdate
            }), () => {
                this.props.getUpdatedValue({
                    ...item,
                    note: this.state.textAreaValue,
                    date: date.toString()
                });
            })
        }
        else {
            this.setState((preV) => ({
                ...preV,
                isupdate: !preV.isupdate
            }));
        }
    }
    render() {
        return <div className="notecard">
            <div className="notecard__item">
                <div className="notecard__header-wrapper">
                    <h5 className="notecard__item-title">
                        {this.props.item.title}
                    </h5>
                    <span className="notecard__item-update" onClick={() => this.sendUpdatedValue(this.props.item)}>
                        {!this.state.isupdate ? <span className="-edit">edit</span> : <span className="-update">update</span>}
                    </span>

                </div>

                <textarea rows='5' className={`notecard__note-value ${this.state.isupdate ? '-update' : ''}`}
                    onChange={this.textareaChange} defaultValue={this.props.item.note}></textarea>
                <span className="notecard__last-update">Last updated :
                    <span>{this.props.item.date}</span></span>
                <img src="/trash.svg" className="notecard__delete-icon" alt="delete icon" title="delete-icon"
                    onClick={() => this.props.getdeletenote(this.props.item.id)}></img>
            </div>
        </div>
    }
}

export default Notecard;