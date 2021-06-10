import React from 'react'
import Two from './Two'

function One() {
    return (
        <div style={{backgroundColor:'red',width:'250px'}}>
            <h1>Layer 1</h1>
            <Two></Two>
        </div>
    )
}

export default One
