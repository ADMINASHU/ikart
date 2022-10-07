import React, { useEffect } from 'react'
import useAuth from "./hooks/useAuth";
import useUI from './hooks/useUI';

const About = () => {
  const { isLoggedIn } = useAuth();
  const {setNavView} = useUI()
  useEffect(() => {
    isLoggedIn();
    setNavView(false);
  }, []);

  return (
    <div>About</div>
  )
}

export default About