import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from './state/actions';

const cities = ['Haifa', 'Boston', 'Yervan', 'Manila', 'Cairo'];

export default function Question(){
    const [city, setCity] = useState(cities[0]);
    const [answer, setAnswer] = useState('')
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{city}</h3>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
            <button onClick={() => {
                dispatch(addAnswer(answer))
                const newCity = cities.indexOf(city) + 1;
                setCity(cities[newCity]);
            }}>Answer</button>
        </div>
    )
}