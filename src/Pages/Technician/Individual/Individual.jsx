import React from 'react'
import './Individual.css'

const Individual = ({img1Src, img2Src, name1, name2, name3, name4}) => {
  return (
        <div className="individual">
            <img className = "individualImage" src={img1Src} alt="" />

            <div className = "individualPersonContainer">
            <div className = "individualProfession">
              <p className = "individualName" >{name1}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            <div className = "individualProfession">
              <p className = "individualName">{name2}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            <div className = "individualProfession">
              <p className = "individualName">{name3}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            <div className = "individualProfession">
              <p className = "individualName">{name4}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            </div>
            
        </div>  )
}

export default Individual