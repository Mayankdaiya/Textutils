import React, { useState } from 'react'

export default function Textform(props) {
  const changefun = (event)=>{
    setText(event.target.value);
  }
  const clickfunU = ()=>{
    let st=text.toUpperCase();
    setText(st);
    props.fun('Coverted to UpperCase!','success');
  }
  const clickfunL = ()=>{
    let st=text.toLowerCase();
    setText(st);
    props.fun('Coverted to LowerCase!','success');
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const cleartxt = () => {
    setText('');
    props.fun('Text cleared!','success');
  }
  const removeSpace = () => {
    let newtxt = text.split("");
    setText(newtxt.join(" "));
    props.fun('Extra spaces removed!','success');
  }
  const [text,setText] = useState('');
  return (
    <>
    <div style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder='Enter your text here' value={text} onChange={changefun} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={clickfunU}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={clickfunL}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={speak}>Tap to speech</button>
      <button className='btn btn-primary mx-1' onClick={cleartxt}>Clear text</button>
      <button className='btn btn-primary mx-1' onClick={removeSpace}>Remove extra space</button>
    </div>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.length} words and {text.length} characters</p>
      <p>{0.008 * text.length} Minutes read</p>
      <h2>Text preview</h2>
      <p>{text.length===0?'Enter something to preview here':text}</p>
    </div>
    </>
  )
}
