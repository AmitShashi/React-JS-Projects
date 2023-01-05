import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => { setText(e.target.value); } //fixed for not change in input fields in textarea on typing
  const handleOnClickUp = () => { setText(text.toUpperCase()); props.showAlert("converted to uppercase", "success") }
  const handleOnClickLow = () => { setText(text.toLowerCase()); props.showAlert("converted to lowercase", "success") }
  const handleOnClickClear = () => { setText(""); props.showAlert("text cleared", "success") }
  const handleOnClickCopy = () => { navigator.clipboard.writeText(text); props.showAlert("text copied", "success") }
  const handleOnClickRemove = () => { setText(text.replace(/\s+/g, " ").trim()); props.showAlert("extra spaces removed", "success") } //write all regExp between / ************** /

  return (
    <>
      <div className='container my-1' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#29183f' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="myBox" rows="15"></textarea>
          <div className='container my-3'>
            <button className='btn btn-primary mx-1 my-1' onClick={handleOnClickUp}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleOnClickLow}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleOnClickClear}>Clear</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleOnClickCopy}>Copy</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleOnClickRemove}>Remove extra space</button>
          </div>
        </div>
      </div>

      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Summary</h1>
        <p>Words length =
          {
            text.split(" ").filter((x) => { return x.length !== 0 }).length
          }
        </p>
        <p>Characters length = {text.length}</p>
        <p>Average time to above text = <code>{0.008 * (text.split(" ").filter((x) => { return x.length !== 0 })).length}</code> min</p>
      </div>
    </>
  )
}


