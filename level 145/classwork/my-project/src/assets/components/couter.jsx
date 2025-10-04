import {useState} from "react"
import"./Counter.css"
export default function Counter(){

  
    return(
        <div>
            <p>GOA best </p>
                <button>{count}</button>
            <button onClick={plus}>+1</button>
             <button onClick={minus}>-1</button>
              
        </div>
    )
}