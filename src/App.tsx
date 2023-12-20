import React, {useState} from 'react';
import './App.css';
import {Button, Input} from 'antd'
import {fetchGpt, IGptMessage} from './api/apiGpt';

function App() {

    const [textMessage, setTeaxtMessage] = useState('');
    const [choices, setChoices] = useState<IGptMessage[]>([]);

    const onAskClick = async () => {
        const messagesResponse =  await fetchGpt(textMessage);
        setChoices(messagesResponse.choices)
        console.log(choices);
    }

    return (
        <div className="App">
            <header className="App-header">
                {choices.map(choice => <div>{choice.message.content}</div>)}
                <Button onClick={onAskClick}>ASK GPT</Button>
                <Input.TextArea value={textMessage} onChange={e => setTeaxtMessage(e.target.value)}/>
            </header>
        </div>
    );
}

export default App;
