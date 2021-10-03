import React, {useEffect, useState} from "react";

function IntervalTimer() {
    const [time, setTime] = useState(0);
    const tick = () => {
        setTime(time + 1);
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, )
  return <div>{time}</div>;
}

export default IntervalTimer;
