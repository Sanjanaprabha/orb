import React from 'react'

const OptionsdashBoard = ({ arrayItems, selectOption }) => {
  return (
    <>
      <h1 className='heading'>ORB</h1>
      <div className='grid-main'>
        {arrayItems.map((item) => {
          return (
            <div key={item.id} className='grid-child' onClick={() => selectOption(item.option)}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OptionsdashBoard
