import React from 'react'
import ContentLoader from "react-content-loader"

function WeatherLoadingBlock() {
  return (
    <ContentLoader 
    speed={2}
    width={430}
    height={300}
    viewBox="0 0 430 300"
    backgroundColor="#d6aff5"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="8" rx="0" ry="0" width="100" height="22" /> 
    <rect x="0" y="62" rx="0" ry="0" width="100" height="22" /> 
    <rect x="0" y="116" rx="0" ry="0" width="100" height="22" /> 
    <rect x="0" y="172" rx="0" ry="0" width="100" height="22" /> 
    <rect x="0" y="225" rx="0" ry="0" width="100" height="22" /> 
    <rect x="354" y="8" rx="0" ry="0" width="40" height="22" /> 
    <rect x="354" y="62" rx="0" ry="0" width="40" height="22" /> 
    <rect x="354" y="116" rx="0" ry="0" width="40" height="22" /> 
    <rect x="354" y="172" rx="0" ry="0" width="40" height="22" /> 
    <rect x="354" y="225" rx="0" ry="0" width="40" height="22" />
  </ContentLoader>
  )
}

export default WeatherLoadingBlock