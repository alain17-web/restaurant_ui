"use client"
import Countdown from "react-countdown";

const endingDate = new Date("2023-09-30")

const CountdownEl = () => {
    return ( 
        <Countdown date={endingDate} className="font-bold text-5xl text-yellow-300"/>
     );
}
 
export default CountdownEl;