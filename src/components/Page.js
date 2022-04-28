import React from 'react'
import Card from './Card'
import Slot from './Slot'

function renderSlot(i) {
    const x = i % 3;
    const y = Math.floor(i / 8);

    //todo: fill slots based on saved data here, dummy data for now
    const hasCard = true;
    const cardUrl = `https://images.pokemontcg.io/ex10/${i+1}_hires.png`
    const card = new Card({cardUrl: cardUrl});

    return (
        <div id={i} style={{width: 'calc(100% / 3)', height: 'calc(100% / 3)'}}>
            <Slot filled={hasCard} children={card}></Slot>
        </div>
    )
}

export default function Page() {
    const slots = [];
    for (let i = 0; i < 9; i++)  {
        slots.push(renderSlot(i));
    }
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {slots}
        </div>
    )
}