import React from 'react'

// probably need more props at some point + html to render blank card input field
// popup for picking a card image from a list instead of set names?
export default function Slot({filled, children}) {
    if (filled) {
        return (
            <div class="filled"
                style={{
                    backgroundColor: '#777777',
                    borderRadius: '5%',
                    width: '250px',
                    height: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {children}
            </div>
        )
    }
    return (
        <div class="empty"
            style={{
                backgroundColor: '#777777',
                borderRadius: '5%',
                width: '250px',
                height: '350px'
            }}
        >
        </div>
    )
}