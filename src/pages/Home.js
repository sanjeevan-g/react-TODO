import React from "react";
import Shownote from "../components/notes-comp/shownotes/Shownotes";
import Showtodo from "../components/showtodolist/Showtodo";

export default class Home extends React.Component {
    render() {
        return <div>
          <Showtodo />
          <Shownote />
        </div>
    }
}