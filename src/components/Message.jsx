import s from "./Message.module.css";
import React from "react";

class Message extends React.Component {
    render = () => {
        return <div className={s.wrapper}>
            <div className={s.cloud}>
                <div className={s.name}>
                    Турецков Евгений
                </div>
                <div className={s.before}>

                </div>
                <div className={s.after}>

                </div>
                <div className={s.message}>
                    Мир не такой уж солнечный и приветливый. Это очень опасное и жесткое место. И если только ты дашь слабину, он опрокинет тебя с такой силой, что больше уже не встанешь. Не ты, не я ни кто на свете не бьет так сильно, как жизнь. Совсем не важно как ты ударишь, а важно какой держишь удар! Как движешься вперед, будешь идти вперед, иди, если с испуга не свернешь...
                    <br/><br/>
                    ааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааамноготекстаааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа
                </div>
                <div className={s.time}>
                    10:42
                </div>
            </div>
        </div>
    }
}
export default Message;