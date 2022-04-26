import React from 'react'

export default function Card({cardUrl}) {
    return <img src={cardUrl} style={{
        maxWidth: '95%',
        maxHeight: '95%'
    }}/>
}