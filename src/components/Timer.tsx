import { useEffect, useRef, useState } from 'react';

type TimerProps = {
  millis: number,
}

const Timer = ({millis}: TimerProps) => {
  const [seconds, setSeconds] = useState(0)
  const ref = useRef<NodeJS.Timer>()
  useEffect(() => {
    ref.current = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, millis)
    return () => {
      ref.current && clearInterval(ref.current)
    }
  }, [millis])
  
  return (
    <>
      <h4>Timer: <small>{seconds}</small></h4>
    </>
  )
}

export default Timer