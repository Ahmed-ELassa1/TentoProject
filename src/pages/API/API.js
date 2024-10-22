import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import { ApiKeys } from '../../data/Data'
import './api.css'

const API = () => {
  return (
    <div>
      <CustomTable
      caption='Your API Keys'
      headers={['Key','Status','Action']}
      tableData={ApiKeys}
      />
    </div>
  )
}

export default API