import React from 'react'
function jsx () {
  const name = 'Tom'
  const age = 20
  const ele = (
    <div>
      <h2> this is a jsx template demo</h2>
      <p data-age={age}>{name} is a young boy, he is {age}     years old </p>
    </div>
  )
  console.log(ele)
  return ele
}

export default jsx
