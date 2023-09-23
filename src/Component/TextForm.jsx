import React,{useState} from 'react';

function TextForm(){
    const [message,setMessage] = useState("");

    function handleMessage(event){
        setMessage(event.target.value)
        console.log(message);
    }

    function handleUpClick(){
        setMessage(message.toUpperCase());
        console.log(message);
    }

    function handleLowerClick(){
        setMessage(message.toLowerCase());
    }

    function handleRemoveClick(){
        var text = message.replace(/\s+/g,' ');
        setMessage(text);
    }

    function handleCopyClick(){
        const x=document.getElementById('myBox');
        x.select();
        navigator.clipboard.writeText(x.value);
    }

    function handleAnalizeTextClick(){
        var text = message.replace(/\s+/g,' ');
        text=text.toLowerCase();
        var arr = text.split(" ");

        var dict=new Map();

        for(const key of arr){

            if(dict.has(key)){

                dict.set(key, dict.get(key)+1);

            } else{
                dict.set(key,1);
            }
        }
        console.log(dict)
        
        var analizedText =document.getElementById('analized-text');

        var table = document.createElement('table');

        var row = table.insertRow();
        var cell= row.insertCell(); 
        cell.textContent='S NO.';
        cell= row.insertCell(); 
        cell.textContent='Word';
        cell= row.insertCell(); 
        cell.textContent='Occurrence';
        var i=1;
        for(let [word,count] of dict){
            row = table.insertRow();
            cell= row.insertCell();            
            cell.textContent=i;
            i+=1
            cell= row.insertCell(); 
            cell.textContent=word;
            cell= row.insertCell(); 
            cell.textContent=count;
            
        }

        analizedText.appendChild(table);
        analizedText.style.textAlign='center';
    }

    return (
    <>
        <div className='heading'>
            <h1>Enter the text to Analize below</h1>
        </div>
        <div className='text-area'>
            <textarea onChange={handleMessage} name="" id="myBox" value={message} cols="100" rows="13"></textarea>
        </div>
        <div className='btns'>
            <button className='btn' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn' onClick={handleLowerClick}>Convert to LowerCase </button>
            <button className='btn' onClick={handleRemoveClick}>Remove Extra Spaces</button>
            <button className='btn' onClick={handleCopyClick}>Copy text </button>
            <button className='btn' onClick={handleAnalizeTextClick}>Analize Text </button>
        </div>
        <div className='heading'>
            <h3>Number of character(including space): {message.length}</h3>
            <h3>Number of character (without space): {message.split(" ").length}</h3>
        </div>
        <div className='analized-text' id='analized-text' ></div>
    </>
    )
}

export default TextForm;