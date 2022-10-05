import React from 'react'

const Alert = ({alertText}) => {
  return (
    <div className='alert alert-danger'>
        {alertText}
    </div>
  )
}

export default Alert