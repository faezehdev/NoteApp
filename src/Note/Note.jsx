import React from 'react'

export default function Note(props) {
    let removeHandler = (e)=>{
        props.onRemove(props.noteID)
    }
  return (
    <div className="note" onClick={removeHandler} style={{backgroundColor:props.bgColor}}>
            <p>{props.title}</p>
         </div>
  )
}
