import {useState, useEffect, useLayoutEffect} from 'react';

//useEffect
//1. Update state
//2. update DOM (mutated)
//3. re-reander UI
//4. call cleanup if deps had been change
//5. call useEffect callback

//useLayoutEffect
//1. Update State
//2. update DOM (mutated)
//3. call cleanup if deps had been change (sync)
//4. call useLayoutEffect callback (sync)
//5. re-render UI

function ReactLayoutEffect(){
    
    const [count, setCount] = useState(0);
    // function updateCount(){
    //     var a = count + 1;
    //     if (a >= 3){
    //         setCount(0);
    //         console.log(count);
    //     }
    //     else{
    //         setCount(a);
    //     }
    //     console.log('a', count);
    // }

    useLayoutEffect(() => {
        if (count > 3){
            setCount(0);
        }
    }, [count])

    const updateCount = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <a onClick={updateCount} href="#" > Click </a>
        </div>
    )
}

export {ReactLayoutEffect};