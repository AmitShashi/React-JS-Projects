//import React, { useState } from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#29183f" : "white"
    }

    return (
        <div className='container mx-2' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About our app</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Welcome to our text analysis app! With our app, you can easily analyze the text you input by finding out how many words it contains,
                            converting uppercase letters to lowercase or vice versa, and more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Features</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Whether you're a writer looking to optimize your work or simply want to analyze text for fun, our app has you covered.
                            Its completely <code>Free to use</code>.
                            We hope you enjoy using our app and find it helpful in your text analysis endeavors. Thank you for choosing us!"
                            A brief overview of the features and functions offered by your app
                            Examples of how your app could be used by users
                            <code>(e.g. "Our app is perfect for writers looking to quickly check the word count of their documents,
                                or for anyone looking to easily convert text from uppercase to lowercase or vice versa.")</code>
                            Information about the team or individuals behind the app (if applicable)
                            A summary of any accolades or recognition the app has received (if applicable)
                            A list of any additional resources or support options available to users <code>(e.g. a FAQ page, a user forum, email support)</code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Author</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <a href="http://github.com/AmitShashi" class="link-info">
                                Amit Shashi
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}