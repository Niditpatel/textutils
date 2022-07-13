import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here')
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert('Converted to uppercase','success');
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert('Converted to lowercase','success');
    }
    const handlecpclick = () => {
        var words = text.split(' ');  
        var CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        let newText = CapitalizedWords.join(' ');  
        setText(newText);
        props.showalert('Converted to capitalized','success');
        
    }
    const handlereverse = () => {
        let newtext = text.split('').reverse().join('');
        setText(newtext);
        props.showalert('Converted to reverseText','success');
    }
    const handleclearclick = () => {
        let newtext = '';
        setText(newtext);
        props.showalert('cleared text','success');
    }
    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert('Copied all text','success');
    }
    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showalert('Removed extra space','success');
    }
    
    const getWordCount = () => {
        let count = text.split(/\s+/)
        .filter(function(n) { return n !== '' })
        .length;
        return count;
    }
    const charcount = () =>{
         return text.replace(/ /g,'').length;
    }
    const handleonchange = (event) =>{
         setText(event.target.value)
    }
  return (
    <>
        <div className='conatiner' style={{color : props.mode === 'light' ? 'black':'white'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchange} 
            style={{backgroundColor : props.mode === 'light' ? 'white':'#042743',color : props.mode === 'light' ? 'black':'white'}}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2  my-1" onClick={handleupclick}>TO UPPERCASE</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2  my-1" onClick={handleloclick}>to lowercase</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2  my-1" onClick={handlecpclick}>To Capitalize</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2  my-1" onClick={handlereverse}>To reverse text</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2  my-1" onClick={handleextraspaces}>Remove extra spaces</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2  my-1" onClick={handlecopy}>Copy text</button>
            <button disabled={text.length === 0}  className="btn btn-primary mx-2  my-1" onClick={handleclearclick}>Clear text</button>
        </div>
        <div className="container" style={{color : props.mode === 'light' ? 'black':'white'}}>
            <h2>Your text summary :</h2>
            <p>{getWordCount()} words and {charcount()} characters</p>
            <p>{0.008 *  getWordCount()} minutes to read normaly</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Nothing to preview!'}</p>
        </div>
    </>
  )
}   
