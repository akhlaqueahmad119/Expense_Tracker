import "../style/AddSpend.css"
import React, {useState} from "react"


function AddSpend(props){
    const [changeTitle,SetchangeTitle] = useState('');
    const [changeamount,Setchangeamount] = useState('')
    const [changeDate,SetchangeDate] = useState('');
  
     function handlerTitle(event){
         return(
            SetchangeTitle(event.target.value)
         )
    }
    function handlerAmount(event){
         return(
            Setchangeamount(event.target.value)
         )
    }
    function handlerDate (event){
        // console.log("AKHLAQUE" + event.target.value)
         
         return(
            SetchangeDate(event.target.value)
         )
    }
    function submitHandler(event){
       event.preventDefault();
       
       const data = {
           title:changeTitle,
           date:changeDate,
           amount:changeamount,
       }
       props.sendTRdata(data)
        // console.log(data)
           SetchangeTitle('');
           Setchangeamount('');
            SetchangeDate('');
       
    }
    return(
        <form onSubmit={submitHandler}>
        <div className="main-spend">
            
            <div className="main-title">
                <div className="A-title">Title</div>
                <input className="co-title" type="text" value={changeTitle} onChange={ handlerTitle} ></input>
            </div>
            <div className="main-amount">
            <div className="A-amount" >Amount</div>
                <input className="co-amount" type="number" value={changeamount} onChange={ handlerAmount}></input>
            </div>
            <div className="main-date">
               <div className="A-date">Date</div>
                <input className="co-date" type="date" value={changeDate} onChange={handlerDate} ></input>
            </div>
            <div className="submit">
            <input className="submit-1" type="submit"></input>
            </div>
        </div>
        </form>
    )
}

export default AddSpend;