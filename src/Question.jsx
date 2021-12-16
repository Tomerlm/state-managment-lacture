import react, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAnswer } from './state/actions';
import { getCity } from './state/cityActions';

export default function Question(){
    const city = useSelector(state => state.cityReducer.city)
    const isLoading = useSelector(state => state.cityReducer.isLoading)
    console.log(city)
    const [answer, setAnswer] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCity());
    } , [])
    return (
        <div>
            <h3>{!isLoading ? city : 'loading'}</h3>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
            <button onClick={() => {
                dispatch(addAnswer(answer))
                dispatch(getCity());
            }}>Answer</button>
        </div>
    )
}