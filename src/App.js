 import React,{useState} from "react"
 import Cart  from './component/Cart';
 import object from './component/Object';
 import Add from "./component/Add"
import './App.css';

function App() {
  
 
  const [objectt,Setobjectt] = useState(object)

  // fetch('https://techgun.website/sample/api/read.php').then(
  //   response => response.json()
  // ).then(data => console.log(data))
  
  function returnfChild(haha){
    const updatedobject = [haha,...objectt]
    Setobjectt(updatedobject)
    // console.log(updatedobject)
  }
  let arrforobject = objectt.map((ele)=>{
    return(
        <Cart info = {ele}/>
    )
  })
  // console.log(arrforobject)
  return (

    <div className="App">
      
      <div className = "main">
      <Add sendtoChild = {returnfChild} />
      {arrforobject}
      </div>
      
   
    </div>
  );
}

export default App;
