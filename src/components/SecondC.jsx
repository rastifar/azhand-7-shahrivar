import React from 'react';
import { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";



const SecondC = () => {
    const [text, setText] = useState('');
    const[msg,setMsg]= useState('')

    return (
        <div className='my-2 p-3'>
            <span className='p-float-label mb-3'>
               
                <InputText value={text} onChange={(e) => setText(e.target.value)} id='inputText'/>
                <label htmlFor="inputText">Message</label>
            </span>
            <Button label='Click' onClick={() => setMsg('Welcom : ' + text)}></Button>
            <div className='mt-3 font-bold'>{msg}</div>
        </div>
    );
};

export default SecondC;