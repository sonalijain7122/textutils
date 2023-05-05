import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLowerclick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const handleClearclick = ()=>{
    
    let newText = ' ';
    setText(newText);
    props.showAlert("Text cleared!","success");
  }

  const handleSpeakclick = ()=>{
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("MyBox");
    if(toogle.textContent==="Speak"){
      toogle.innerHTML="Stop"
    }
    else{
      toogle.innerHTML="Speak"
      if(toogle.innerHTML = "Speak"){
        window.speechSynthesis.cancel()

      }
    }
    props.showAlert("Text Speaked!","success");
  }
  const handleCopyclick = ()=>{
   let newtext = document.getElementById("MyBox");
   newtext.select();
   navigator.clipboard.writeText(newtext.value);
   props.showAlert("Text copied!","success");
  }

  const handleextraspaceclick = ()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Space Removed!","success");
   }

  

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }


    const [text, setText] = useState('');
  return (
    <>
 <div>

<div className="mb-3 container" style={{color : props.mode==='dark' ? 'white' : 'black'}} >
<h1>{props.heading}</h1>
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white' , color: props.mode==='dark'?'white':'black'}}  id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerclick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleSpeakclick}>Speak</button>
<button className="btn btn-primary mx-1"  onClick={handleCopyclick}>Copied</button>
<button className="btn btn-primary mx-1"  onClick={handleextraspaceclick}>Remove Extra Spaces</button>
 </div>


<div className="container my-3" style={{color : props.mode==='dark' ? 'white' : 'black'}} >
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters </p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
</div>
    </>
  )
}


