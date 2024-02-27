import React from "react"

export default function about(props) {
  return (
    <>
        <div className="my-3">
        

<div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor: props.Mode===true?"#282828":"white", color: props.Mode===true?"white":"black" }}>
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        style={{backgroundColor: props.Mode===true?"#282828":"white", color: props.Mode===true?"white":"black" }}
      >
        Text UTILITIES Software Overview
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
    TEXT UTILITIES is React js based single page application which has some features that helps to convert your input text into uppercase, lowercase . It removes extra spaces between two words.
      </div>
    </div>
  </div>
  
  <div className="accordion-item" style={{backgroundColor: props.Mode===true?"#282828":"white", color: props.Mode===true?"white":"black" }}>
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
        style={{backgroundColor: props.Mode===true?"#282828":"white", color: props.Mode===true?"white":"black" }}
      >
       What are the benefits of using TEXT UTILITIES software?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
       <pre> Convert your text to : UpperCase
                               Lowercase
                              Remove Extra Spaces between words
                              Copy Text
                              Preview Text
             User can enable darkmode using toggle button </pre>
                              
      </div>
    </div>
  </div>
</div>

<div className="card text-center my-1" style={{backgroundColor: props.Mode===true?"#282828":"white", color: props.Mode===true?"white":"black" }}>
  <div className="card-header">Featured By</div>
  <div className="card-body">
    <h5 className="card-title">Meshv Patel</h5>
    <p className="card-text">
   <p> Front End Developer</p>
    <p>meshv1444@gmail.com</p>
    <p>(+91)9408061619</p>
    <p className="container">
    Excellent problem-solving skills
    Strong knowledge of HTML, CSS, JavaScript
    Experience in one (or more) of the following frameworks: AngularJS, React JS

    Migrated a multi-page user experience into a single-page app which improved customer engagement by 8% using React

    “Recent graduate with an LJIET in Information Technology looking to leverage my experience building responsive and scalable web apps to solve interesting problems that delight end-users.”
  </p>

      
      
    </p>
    <a href="https://www.linkedin.com/in/meshv-patel-843539226/"  target="_blank" rel="noopener noreferrer" className="btn btn-primary fa fa-linkedin mx-2"></a>
    <a href="https://github.com/meshv94/TextUtilities.git"  target="_blank" rel="noopener noreferrer" className="btn btn-dark fa fa-github"></a>
    
      
  </div>
</div>
        </div>

    </>
  )
}
