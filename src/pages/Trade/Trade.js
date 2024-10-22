import React from 'react'
import './trade.css'
import TradeCard from '../../components/TradeCard/TradeCard'
import Table from '../../components/Table/Table'

const Trade = () => {
  return (
    <div className='trade container content'>
      <div className="first-wrapper">
        <TradeCard title='Buy' stHeaing='Send' scdHeading='Receive' btnHeading='Buy Now' colorBg='#346aa9'/>
        <TradeCard title='Sell' stHeaing='Send' scdHeading='Receive' btnHeading='Sell Now' colorBg='#346aa9'/>
        <TradeCard title='Transfer' stHeaing='Send' scdHeading='Receive' btnHeading='Transfer Now' colorBg='#36b37e'/>
        <TradeCard title='Convert' stHeaing='Send' scdHeading='Receive' btnHeading='Convert Now' colorBg='#36b37e'/>
      </div>
      <div className="">
        <Table caption='Buy Transaction'/>
        <Table caption='Sell Transaction'/>
        <Table caption='Transfer Transaction'/>
        <Table caption='Convert Transaction'/>
      </div>
    </div>
  )
}

export default Trade