import React from 'react'

export default function About(props) {
  return (
    <div className='container' style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
       <div className="accordion" id="accordionExample" style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}} >
            <div className="accordion-item" style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}} >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <h4> <em> Analyze your text </em> </h4> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Textutils gives you a way to analyze  you text quickly and effectivly.</strong> 
                    Be it word count, character count , convert to uppercase ,convert to lowercase, reverse ,copt text or cpitalize text .
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}} >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h4> <em> Free to use </em> </h4>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Textutils is a free character counter tool</strong> that provides instant character count and word count statistics for a given text.Textutils reports a numbers of words and characters. Thus it is suitable for writing text with word / character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}} >
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={{color : props.mode === 'light' ? 'black':'white',backgroundColor : props.mode === 'light' ? 'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 <h4><em> Browser compitible </em></h4>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This word counter software works in any web browsers </strong> such as chrome,microsoft edge, firefox ,internet explorer,safari ,opera. It suits to count characters in facebook , blog, books, excel document, pdf documents , essays , etc.               </div>
                </div>
            </div>
        </div>
    </div>
  )
}
