import React, { useEffect } from 'react'
import { useGetAuthUserQuery } from '../api/authApi';

const About = () => {

  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data:authUser,
  } = useGetAuthUserQuery()

// console.log("from profile",authUser);
console.log("from about",authUser?.username);





  return (
    <div>About</div>
  )
}

export default About