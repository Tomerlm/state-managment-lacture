import react, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCity } from "./state/hooks";
import { addAnswer } from './state/actions';

export default function Question(){
    const queryData = useCity();
    console.log(queryData);
    const {isLoading, isError, data: city, refetch: refetchCity} = queryData;
    useEffect(() => {
        refetchCity()
    }, [])
    const [answer, setAnswer] = useState('')
    const dispatch = useDispatch();
    return (
        <div>
            {isError && <p>we have an error.</p>}
            <h3>{isLoading ? 'loading' : city}</h3>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
            <button onClick={() => {
                dispatch(addAnswer(answer, city))
                refetchCity();
            }}>Answer</button>
        </div>
    )
}