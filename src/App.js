import React from 'react';
import './App.module.css';
import Message from './components/Message';
import NameUser from "./components/NameUser";
import PersonalQualities from "./components/PersonalQualities";


function App() {
    let tasks = [
        {quality: "Довожу дело до конца"},
        {quality: "Хорошее чувство юмора"},
        {quality: "Не боюсь сложных задач"}
    ];
    return (
        <div>
            <NameUser/>
            <Message/>
            <PersonalQualities tasks={tasks}/>
        </div>

    );
}

export default App;