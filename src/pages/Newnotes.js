import React from "react";
import { useHistory } from "react-router";
import Addnote from "../components/notes-comp/addnewnote/Addnote";

function Newnotes(){
    const history = useHistory();
    function noteDataFromChild(data){
        fetch("https://todo-list-4fd4f-default-rtdb.firebaseio.com/usernote.json",{
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            if(response.status===0)
            {
                alert("note successfully added!")
                history.replace("/")
            }
            else {
                alert("failed to add")
            }
        })
    }
    return <div>
        <Addnote sendnotedata={noteDataFromChild} />
    </div>
}

export default Newnotes