import React, { useState } from 'react'
import './App.css';
const Todolist = () => {
    const[activity ,setActivity]=useState('')
    const[list,setList]=useState("")
   function addActivity(){
        // setList([...list,activity])
        // console.log(list)
        setList((list)=>{
            const update=[...list,activity]
            setActivity('');
            return update
        });
   }
   function removeActivity(i)
   {
            const updatedList=list.filter((ele,id)=>{
                return i!=id;
            })
            setList(updatedList);
    }
    function removeAll(){
        setList([])
    }
  return (
    <>
    <div className="container">
        <div className='header'></div>
        <h1>To Do App</h1>
        <input type='text' placeholder='Enter the activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button  style={{width:"100px"}}onClick={addActivity}>Add</button>
        <br></br>
        <p className='listheading'>Here is your List</p>
        {list!=[] && list.map((data,i)=>{
            return(
                <>
                    <p key={i} >
                        <div style={{display:"flex"}}>
                                <div className='datalist'>{data}</div>
                                <button onClick={()=>removeActivity(i)} >Remove</button>
                        </div>
                    </p>
                </>
            )
        })}
       {list.length>=1 && <button style={{height:"25px"}}  onClick={removeAll}>Remove all</button>} 
    </div>
    </> 
  )
}

export default Todolist