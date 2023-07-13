import React,{useState} from 'react'


export default function TexthtmlForm(props) {
  const [text,setText] = useState('');

  const handleUpClick=()=>{
    console.log("I am clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
  }
  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success")
  }
  const handleCapClick = ()=>{
    let newText = text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
    props.showAlert("Converted to Capitalized Case","success")
  }
  const handleRevClick = () => {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === char.toLowerCase()) {
            newText += char.toUpperCase();
        } else {
            newText += char.toLowerCase();
        }
    }
    setText(newText);
    props.showAlert("Converted to Reversed Case","success")
};
  const handleOnChange=(event)=>{
    console.log("I can change")
    setText(event.target.value)
  }
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>      
<div className="mb-3">
<h1>{props.heading}</h1>
  <textarea className="Form-control" id="myBox"  rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>  
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to Capital Case</button>
<button className="btn btn-primary mx-2" onClick={handleRevClick}>Convert to Reverse Case</button>
    </div>

    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p> {/* minutes to read word */}
      <h2>Preview</h2>
      <p><small>{text.length>0?text:"Enter something to preview it here"}</small></p>
    </div>

   
    </>
    
  )
}
