import React from 'react'
import './privacyItem.css'

const PrivacyItem = ({title,text,btnText}) => {
  return (
    <div className='privacy-item'>
      <h2 className='tab-heading'>{title}</h2>
      <p>{text}</p>
      <button className='privacy-btn'>{btnText}</button>
    </div>
  )
}

export default PrivacyItem