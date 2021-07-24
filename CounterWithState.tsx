import React, {Fragment} from 'react'

export const CounterWithState:React.FC<{defaultValue:number, bgColor:string}> =({defaultValue,bgColor}) => {
    //let counter:number = 0;
    let [counter, setCounter] = React.useState(defaultValue);

    const updateCounter = (value:number) => {
        setCounter(counter + value);
        console.log(counter);
    }

    return (
        //jsx => java script xml
        // <Fragment>
        //     <h2>Counter : {}</h2>
        // </Fragment>
        <>
           <h2 className="" style={{color:"white", backgroundColor:bgColor, padding:"1rem 2rem"}}>
               Counter with state : {counter}
            </h2>
            <button onClick={() => updateCounter(1)}>+1</button>
            <button onClick={() => updateCounter(-1)}>-1</button>
         </>
    )
}
