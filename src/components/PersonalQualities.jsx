import s from "./PersonalQualities.module.css";
import React from "react";

const Message = (props) => {
    let taskElements = props.tasks.map((task, id) =>{
        if(id === 1) {
            return <li key={task.id} className={s.twoElem}>{task.quality}</li>;
        } else {
            return <li key={task.id} >{task.quality}</li>;
        }

    });
    return (
        <div className={s.wrapper}>
            <h2>Мои личные качества</h2>
            <ul>{taskElements}</ul>
        </div>
    )
}
export default Message;