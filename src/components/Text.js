import React, {useState} from "react";

export default function Text(props) {
  const handleextraspace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const copytxt=()=>{
    let txtarea = document.getElementById("txtarea");
    txtarea.select();
    navigator.clipboard.writeText(txtarea.value);
  }

    function cleartxt(){
        setText("");

    }

    function changeme(event){
        // console.log("cahnged")
        setText(event.target.value);
        // console.log(text);
    }

    function handleupcase(){
        const newText = text.toUpperCase();
        setText(newText);
        // console.log("uppercase : " + text);
    }

    function handlelocase(){
        const newText = text.toLowerCase();
        setText(newText);
        // console.log("lowercase : " + text);
    }

    //creating state
    const [text, setText] = useState("");
    
  return (
    <>
      <h4 className="my-3">Enter text to analyze  </h4>
        <textarea className="form-control" id="txtarea" rows={12} cols={10} value={text} onChange={changeme} style={{backgroundColor: props.Mode===true?"#191819":"white", color: props.Mode===true?"white":"black" }} />
        <div className="container my-1">
        <h5>
            {text.split(" ").length} words {text.length} characters
        </h5>
    </div>

      <div className="container">
        <button type="button" className="btn btn-sm btn-primary my-2 mx-1" onClick={handleupcase}>
          Convert to UpperCase
        </button>
        <button type="button" className="btn btn-sm btn-primary my-2 mx-1" onClick={handlelocase}>
          Convert to Lowercase
        </button>
        <button type="button" className="btn btn-sm  btn-primary my-2 mx-1" onClick={handleextraspace}>
          Remove extra spaces
        </button>
        <button type="button" className="btn btn-sm btn-primary my-2 mx-1" onClick={cleartxt}>
          Clear Text
        </button>
        <button type="button" className="btn btn-sm btn-primary my-2 mx-1" onClick={copytxt}>
          Copy Text
        </button>
      </div>

<div className="accordion my-3" id="accordionExample" >
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          style={{backgroundColor: props.Mode===true?"#191819":"white", color: props.Mode===true?"white":"black" }}
        >
          <h5>Preview Text :</h5>
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{backgroundColor: props.Mode===true?"#191819":"white", color: props.Mode===true?"white":"black" }}>
          <h6>{text}</h6>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
      
      


