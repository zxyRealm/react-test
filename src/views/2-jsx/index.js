import React from 'react'
function jsx () {
    const name = 'Tom'
    const age = 20
    const ele = (
        <div>
            <h2> this is a jsx template demo</h2>
            {/*属性值为字符串时使用引号*/}
            <p data-age={age} key="1">{name} is a young boy, he is {age}     years old </p>
        </div>
    )
    console.log(ele)
    return ele
}

export default jsx
