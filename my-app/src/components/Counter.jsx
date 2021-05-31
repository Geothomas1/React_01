import React from 'react'

function Counter({title,count}) {
    //We can  write direct with out props
    return (
        <div>
            <h1>{title} :{count}</h1>
        </div>
    )
}

export default Counter
