import React, { Component } from 'react'
import Note from '../Note/Note';
export default class NoteList extends Component {
    constructor(props){
        super(props)
        this.state = {
          noteTitle :'',
          mainColor:'',
          noteList:[],
          colors:[
            {id:'1',colorName:'color1',color:'#92FE9D'},
            {id:'2',colorName:'color2',color:'#fe92fe'},
            {id:'3',colorName:'color3',color:'#92ecfe'},
            {id:'4',colorName:'color4',color:'#ad92fe'},
            {id:'5',colorName:'color5',color:'#d192fe'}

        ]
        }
    }
    inputHander = (e)=>{
        this.setState({
            noteTitle : e.currentTarget.value
        })
    }
    addNote = (e)=>{
        if(this.state.noteTitle !==''){
            let newNote = {
                id : this.state.noteList.length + 1,
                title : this.state.noteTitle,
                color:this.state.mainColor
            }
            this.setState((prev)=>{
                return{
                    noteList : [...prev.noteList,newNote],
                    noteTitle :'',
                }
            })
        }  
    }
    removeNote = (noteID)=>{
        console.log(noteID);
        let newObj = [...this.state.noteList]
        newObj = newObj.filter((item)=>{
            return item.id != noteID
        })
        this.setState((prev)=>{
            return{
                noteList : newObj
            }
        })
    }
    colorHandler = (e,color)=>{
        let colorID = color
        let colors = [...this.state.colors]
        let colorM
    for(let i =0 ; i < this.state.colors.length ; i++){
        if(colors[i].id === colorID){
            colorM = colors[i].color
        }    
    }
    this.setState({
        mainColor : colorM
    })
    }
    removeTitle = ()=>{
        this.setState({
            noteTitle :'',
            mainColor:''
        })
    }
  render() {
    return (
       <>
       <div className="InputBoxes">
          <div className="Input">
            <input type="text" placeholder='Type somethings....' style={{backgroundColor:this.state.mainColor}}
            value={this.state.noteTitle} 
            onChange={(e)=>this.inputHander(e)}/>
          </div>
          <div className="colores">
            {this.state.colors.map((color)=>(
                 <span className={`color color__${color.id}`} onClick={(e)=>this.colorHandler(e,color.id)}></span>
            ))}
          </div>
          <div className="btns">
            <span className="remove" onClick={this.removeTitle.bind(this)}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.16 122.88"><defs>
              </defs><title>delete</title>
              <path class="cls-1" d="M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z"/></svg>
            </span>
            <span className="add" onClick={(e)=>this.addNote(e)}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>plus-glyph</title><path d="M256,0C114.84,0,0,114.84,0,256S114.84,512,256,512,512,397.16,512,256,397.16,0,256,0Zm85.33,277.33h-64v64a21.33,21.33,0,1,1-42.67,0v-64h-64a21.33,21.33,0,1,1,0-42.67h64v-64a21.33,21.33,0,1,1,42.67,0v64h64a21.33,21.33,0,1,1,0,42.67Z"/></svg>
            </span>
          </div>
       </div>
       <div className='noteBoxes'>
        {this.state.noteList.map((note)=>(
            <Note {...note} key={note.id} bgColor={note.color} onRemove={this.removeNote} noteID={note.id}/>
        ))}
       
       </div>
       </>
    )
  }
}
