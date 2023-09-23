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
        <textarea className="form-control" placeholder='Enter your text here' value={text} onChange={changefun} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor : props.mode==='dark'?'#878C8F':'#EDF2EF', color : props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={clickfunU}>Convert to Uppercase</button>
      <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={clickfunL}>Convert to Lowercase</button>
      <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={speak}>Tap to speech</button>
      <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={cleartxt}>Clear text</button>
      <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={removeSpace}>Remove extra space</button>
    </div>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((el)=>{return el.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(/\s+/).filter((el)=>{return el.length!==0}).length} Minutes read</p>
      <h2>Text Preview</h2>
      <p>{text.length===0?'Nothing to preview.':text}</p>
    </div>
    </>
  )
}
