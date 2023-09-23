import React, {useState} from 'react'

export default function About(props) {
    const mycolor = (mode)=>{
        return mode==='dark'?'white':'black';
    }
    const mybg = (mode)=>{
        return mode==='dark'?'#444140':'#EDF2EF';
    }
    return (
        <div className='container' style={{color : mycolor(props.mode)}}>
            <h1  className='my-3'>About us . .</h1>
            <div className="accordion" id="accordionExample" style={{backgroundColor : mybg(props.mode), color : mycolor(props.mode)}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={{backgroundColor : mybg(props.mode), color : mycolor(props.mode)}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'#706C61':'#EDF2EF', color : mycolor(props.mode)}}>
                            <strong>A Comprehensive Text Utility Website:</strong> Are you looking for a versatile online tool to analyze and manipulate text with ease? Look no further! Our "Textutils" website offers a range of powerful features designed to help you work with text effortlessly. Whether you need to convert text to uppercase or lowercase, listen to it using text-to-speech technology, clear the input field, or even remove specific parts of the text, our user-friendly site has got you covered.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor : mybg(props.mode), color : mycolor(props.mode)}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'#706C61':'#EDF2EF', color : mycolor(props.mode)}}>
                            <strong>A Comprehensive Free Text Utility Website:</strong> Our website is designed with a simple and intuitive interface, ensuring that users of all skill levels can navigate and utilize its features with ease.The text-to-speech feature enhances accessibility by allowing users to hear the text, which can be especially helpful for those with visual impairments or learning disabilities.We believe in providing valuable tools to our users without any cost. You can access and use all of our text analysis features without any subscription fees or hidden charges.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor : mybg(props.mode), color : mycolor(props.mode)}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'#706C61':'#EDF2EF', color : mycolor(props.mode)}}>
                            <strong>A Comprehensive Free Text Utility Website with Broad Browser Compatibility:</strong> Our website is optimized for compatibility with the following popular web browsers like Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari, Opera and Other Modern Browsers.No matter which browser you prefer to use, you can rely on "Textutils" to deliver its powerful and free text analysis features with consistency and ease of use. Access our website with confidence, knowing that it's designed to work smoothly across a broad range of web browsers, making it accessible to a diverse user base.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
