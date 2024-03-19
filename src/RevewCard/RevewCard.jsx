import React from 'react'

const RevewCard = ({point, thankyou, paragraph,logosrc}) => {
  return (
    <div className='Reviewcard'>
        <img src={logosrc}/>
        <h1>You selected {point} out of 5</h1>
        <h2>{thankyou}</h2>
        <p>{paragraph}</p>
    </div>
  )
}

export default RevewCard