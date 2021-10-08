import "./todocard.scss"
function TodoCard(props) {

    return <div className="todocard">
        <div className="todocard__wrapper">
            {props.items.map((item) => {
                return <div className="todocard__tile" key={item.id}>
                    <div className="todocard__content">
                        <h2 className="todocard__title">
                            {item.title}
                        </h2>
                        <p className="todocard__descptn">{item.description}</p>
                        {!item.isComplete ? <button className="todocard__complete-btn" onClick={() => props.markComplete(item)}>Mark as complete</button> :
                            <span className="todocard__complete-success">Completed</span>}
                    </div>
                    <label className={`todocard__priority ${item.priority === 'high' ? '-high' :
                        item.priority === "medium" ? "-medium" : "-low"}`}>
                        {item.priority}
                    </label>
                    <label className="todocard__lastupdate">
                        last update on: <span>{item.date}</span>
                    </label>
                    <img src="/trash.svg" className="todocard__delete-icon" alt="delete icon" title="delete-icon"
                        onClick={() => props.getdeletetodo(item.id)}></img>
                </div>
            })}
        </div>
    </div>
}

export default TodoCard;