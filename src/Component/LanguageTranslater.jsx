import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function LanguageTranslater(){
    
    const [to,setTo]=useState("en");
    const [from, setFrom]=useState("en");
    const [input,setInput]=useState("");
    const [output,setOutput]=useState("");
    const [options,setOptions]=useState([]);

    useEffect(()=>{
        axios.get('https://libretranslate.com/languages',{header:{'accept':'application/json'}}).then(res=>{
        console.log(res.data)
        setOptions(res.data)
    })
    },[])
    // curl -X 'GET' \'https://libretranslate.com/languages' \-H 'accept: application/json'

    const translated=()=>{
        const params= new URLSearchParams();
        params.append('q',input);
        params.append('source',from);
        params.append('target',to);
        params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
        const url='https://libretranslate.de/translate';
        axios.post(url,params,
        {headers:{'accept':'application/json',
        'Content-Type':'application/x-www-form-urlencoded',
    },
    }).then(res=>{
            console.log(res.data);
            setOutput(res.data.translatedText);
        });
    }
    return (
        <>
        <div className='heading'>
            <h1>Enter the text to translate below</h1>
        </div>
        <div className='translate-text-area'>
            <div className='input-box'>
                <label htmlFor="" className='translate-label-text'>Input text for translation and select language</label>
                <textarea name="" id="myBox"  cols="60" rows="10" placeholder='Enter text...' onInput={e=>setInput(e.target.value)}></textarea>
                <select className="translate-select" onChange={e=>setFrom(e.target.value)}>
                {
                    options.map(opt=>(
                        <option value={opt.code}>{opt.name}</option>
                    ))
                }
                </select>
            </div>
            <div className='output-box'>
                <label htmlFor="" className='translate-label-text'>Output</label>
                <textarea name="" id="myBox"  cols="60" rows="10" placeholder='' value={output}></textarea>
                <select className="translate-select" onChange={e=>setTo(e.target.value)}>
                {
                    options.map(opt=>(
                        <option value={opt.code} >{opt.name}</option>
                    ))
                }
                </select>
            </div>
        </div>
        <div className='translate'>
            <button className='translate-btn' onClick={e=>translated()}>Translate</button>
        </div>
    </>
    )
}

export default LanguageTranslater;