import React from 'react';
import Slot from '../components/Slot';
import Card from '../components/Card';

const card = new Card({cardUrl: "https://images.pokemontcg.io/ex10/25_hires.png"})

export default {
    filled: <Slot filled="true" children={card}></Slot>,
    empty: <Slot filled={false}></Slot>
}