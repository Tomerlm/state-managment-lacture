import react, { useState } from "react";
import { useSelector } from 'react-redux';

export default function Question(){
    const items = useSelector(state => state.answersReducer.answers)
    return (
        <div>
            <ul style={{display: 'flex', flexDirection: 'row', listStyle: 'none'}}>
               {items.map(item => {
                   return(
                       <li key={item.city} style={{margin: 20}}>
                           <div>Guess: {item.guess}</div>
                           <div>Actual: {item.actual}</div>
                           <div>{Math.abs(item.guess - item.actual) <= 5 ? "Correct!" : "Wrong."}</div>
                       </li>
                   )
               })}
            </ul>
        </div>
    )
}