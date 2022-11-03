import React from 'react'
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <Oval
        height={40}
        width={40}
        color="#001742"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#fffff"
        strokeWidth={0}
        strokeWidthSecondary={4}
      />
  )
}

export default Loading