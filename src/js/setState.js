import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const gifts = [
    'CPU',
    'RAM',
    'SSD'
]

function State(){
    const [gift, setGift] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)

        console.log(index);
        setGift(gifts[index]);
    }

    const submit =() =>{
        console.log({
            name,
            email
        })
    }

    return (
        <div style={{padding: 32}}>
            <h1>{gift || 'No gift'}</h1>
            <button onClick = {randomGift}>Take one</button>
            <div>
                <label style={{color: 'red'}} >Name</label>
                <input value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div>
                <label style={{color: 'red'}}>email</label>
                <input value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default State;