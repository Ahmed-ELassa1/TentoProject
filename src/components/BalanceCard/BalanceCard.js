import React from 'react'
import './balanceCard.css'


const BalanceCard = ({title,img}) => {
  return (
    <div className='balance-card'>
      <div className="left-side">
        <div className="coin">
          {title}
        </div>
        <span>$ 11,785.10</span>
      </div>
      <div className="right-side">
        <img src={img} alt='currency' />
      </div>
    </div>
  )
}

export default BalanceCard