import React from 'react'
import ContentLoader from "react-content-loader"

function DisplayLoadingBlock() {
  return (
        <ContentLoader 
        speed={2}
        width={845}
        height={222}
        viewBox="0 0 845 191"
        backgroundColor="#d6aff5"
        foregroundColor="#ecebeb"
        
    >
        <rect x="3" y="40" rx="0" ry="0" width="508" height="60" /> 
        <rect x="3" y="124" rx="0" ry="0" width="795" height="89" />
    </ContentLoader>
  )
}

export default DisplayLoadingBlock