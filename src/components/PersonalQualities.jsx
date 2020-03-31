import s from "./PersonalQualities.module.css";
import React from "react";

class PersonalQualities extends React.Component {
    taskElements = this.props.tasks.map((task, id) =>{
        if(id === 1) {
            return <li key={task.id} className={s.twoElem}>{task.quality}</li>;
        } else {
            return <li key={task.id} >{task.quality}</li>;
        }

    });

    render = () => {
        return (
            <div className={s.wrapper}>
                <h2>Мои личные качества</h2>
                <ul>{this.taskElements}</ul>
            </div>
        )
    }
}
export default PersonalQualities;