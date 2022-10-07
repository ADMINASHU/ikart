import React, { useEffect } from 'react'
import useAuth from "./hooks/useAuth";

const About = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div>About</div>
  )
}

export default About