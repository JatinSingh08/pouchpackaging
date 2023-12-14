import React from 'react'
import MissionValues from "../../assets/missionvalues.png";

const CompanyStats = () => {
  return (
    <div className="flex items-center justify-center py-4 px-4">
    <img 
    alt="missionvalues"
    src={MissionValues}
    className="w-full lg:w-[60%] h-full object-contain"
    draggable={false}
    />
  </div>
  )
}

export default CompanyStats
