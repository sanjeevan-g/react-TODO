import React from "react";
import { useHistory } from "react-router";
import Addtodo from "../components/addtodo/Addtodo";

function Newtodo() {
    const history = useHistory();
    function toDoDataFromChild(tododata){
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/todolist.json",{
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(tododata),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            if(response.status===0)
            {
                alert("successfully added!")
                history.replace("/")
            }
            else {
                alert("failed to add")
            }
        })
    }
    return <div>
        <Addtodo sendToDoData={toDoDataFromChild} />
    </div>
}

export default Newtodo;