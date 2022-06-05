import React from "react"
import "../style/Cart.css"


function Cart(props){
  //console.log(props.info.date)
  // console.log(props.info.id)
 
  
  let dateValue = String(props.info.date).slice(0,15).split('-')
  
  //  let dateValue = String(props.info.date).slice(0,15).split('-')
    // console.log(dateValue)
 
  
    return(
        
       <div  className = "box"   key=  {props.info.id}>

    
             
             <div className = "tarikh" >
                <div className="dy">{dateValue[2]}th</div>
               <div className="mth">{dateValue[1]}</div>
               <div className="yr">{dateValue[0]}</div> 
             </div> 
           <div className = "spend"><h2>{props.info.title}</h2></div>
           <div className = "price"><h3>${props.info.amount}</h3></div>
         
                
         
           </div>
    
    );
}
export default Cart;