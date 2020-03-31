import React from 'react';
import './App.module.css';
import Message from './components/Message';
import NameUser from "./components/NameUser";
import PersonalQualities from "./components/PersonalQualities";
import Counter from "./components/Counter";

class App extends React.Component {
    state = {
        tasks: [
            {quality: "Довожу дело до конца"},
            {quality: "Хорошее чувство юмора"},
            {quality: "Не боюсь сложных задач"}
        ],

        numValue: 0
    };

    addNumber = (newAlert) => {
        alert("Nice to meet you " + newAlert);

        this.setState({
            numValue: this.state.numValue + 1
        })
    };

    render = () => {
        return (
            <div>
                <NameUser/>
                <Message/>
                <PersonalQualities tasks={this.state.tasks}/>
                <Counter numbers = {this.state.numValue} addNumber = {this.addNumber}/>
            </div>
        );
    }
}

export default App;