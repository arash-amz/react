import React, {Fragment} from 'react'

export const Counter = () => {
    let counter:number = 0;
    const updateCounter = (value:number) => {
        counter += value;
        console.log(counter);
    }

    return (
        //jsx => java script xml
        // <Fragment>
        //     <h2>Counter : {}</h2>
        // </Fragment>
        <>
           <h2 className="" style={{color:"white", backgroundColor:"red", padding:"1rem 2rem"}}>
               Counter : {counter}
            </h2>
            <button onClick={() => updateCounter(1)}>+1</button>
            <button onClick={() => updateCounter(-1)}>-1</button>
         </>
    )
}
