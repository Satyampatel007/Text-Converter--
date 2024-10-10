import React, {useState} from 'react'



export default function Textform(props) {
     const handleUpClick = () =>{
       // console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" ,"success");
     }
     const handleLoClick = () =>{
        // console.log("upper case was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lowercase" ,"success");
      }
      // const handleCapClick = () => {
      //   const capitalize= (word) =>{
      //     const lower = word.toLowerCase();
      //     return lower.charAt(0).toUpperCase() + lower.slice(1);
      //   }
      // }
    const handleCopy =()=>{
        // var text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied" ,"success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpacces has removed" ,"success");
    }
      const handleClearClick = () =>{
        let newtext = ' ';
        setText(newtext);
        props.showAlert("Text has been cleared" ,"success");
      }
      const handleOnChange = (event) =>{
       // console.log(" on change");
        setText(event.target.value);
      }



    const [text, setText] = useState ('Enter the text here');
   // setText("new text");
  return (
    <>
    <div className='container' style={{ color: props.mode==='dark'?'white':'black'}}>
    <h1 className='my-2 '>{props.heading}</h1>
     <div className='mb-3'>
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' ,color: props.mode==='dark'?'white':'black'}} id="mybox" rows={8}/>
  </div>
    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    {/* <button className="btn btn-primary mx-1" onClick={handleCapClick}>Convert to Capitalized</button> */}
    <button  disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled= {text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3"  style={{ color: props.mode==='dark'?'white':'black'}}>
    <h2>Youe text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Mintues to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview! "}</p>
  </div>
  </>
   
  )
}
