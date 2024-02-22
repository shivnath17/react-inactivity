import React, { useEffect, useState } from 'react'
import { ReactInactivityProps } from './types'

const useReactInactivity = ({ minute }: ReactInactivityProps) => {
  const [tracking, setTracking] = useState(false)
  const [isIdeal, setIsIdeal] = useState(false)

  useEffect(() => {
    setTracking(true)
    const updateStorage = () => {
      localStorage.setItem('lastActvity', new Date().toISOString())
    }

    document.addEventListener("mousemove", updateStorage);
    document.addEventListener("click", updateStorage);

    return () => {
      document.removeEventListener("mousemove", updateStorage);
      document.removeEventListener("click", updateStorage);
    }

  }, [minute])


  useEffect(() => {
    const checkIntervals = setInterval(() => {
      const lastAcivity: string = localStorage.getItem('lastActvity') || new Date().toISOString()
      // @ts-ignore
      const diffMs = Math.abs(new Date(lastAcivity) - new Date()); // milliseconds between now & last activity
      const seconds = Math.floor((diffMs/1000));
      const mins = Math.floor((seconds/60));
      console.log(seconds +' sec and '+mins+' min since last activity')
      if(mins == minute){
        console.log(`No activity from last ${minute} minutes...`)
        setIsIdeal(true)
        clearInterval(checkIntervals)
      }
    },1000)
    
    return () => {
      clearInterval(checkIntervals)
    }
  }, [tracking])

  return { isIdeal }
}

export { useReactInactivity }
export * from './types'