import react, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAnswer } from './state/actions';
import { getCityThunk } from "./state/citySlice";

const cities = ['Haifa', 'Boston', 'Yervan', 'Manila', 'Cairo'];

export default function Question(){
    const city = useSelector(state => state.cityReducer.city)
    const isLoading = useSelector(state => state.cityReducer.isLoading)
    useEffect(() => {
        dispatch(getCityThunk()); 
    }, []);
    const [answer, setAnswer] = useState('')
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{isLoading ? 'loading' : city}</h3>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
            <button onClick={() => {
                dispatch(addAnswer(answer, city));
                dispatch(getCityThunk());
            }}>Answer</button>
        </div>
    )
}