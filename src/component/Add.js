import "../style/Add.css"
import React from "react"
import AddSpend from "./AddSpend"


function Add(props){
    function importData(receivedData){
        const fff = {
            ...receivedData,
            id:Math.random()
        }
        // console.log(fff)
        return(
            // console.log(receivedData),
            
           props.sendtoChild(fff)
        )
    }
    return(
        <>
        <AddSpend sendTRdata = {importData}/>
        </>
    )
}

export default Add;