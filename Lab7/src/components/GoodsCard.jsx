import React from 'react';
import { CardsGallery } from './CardsGallery';
import '../css/GoodsCard.css';


export default function GoodsCard () {
    return (
        <div className='card'>
            {CardsGallery.map(figure => <MangaCard info={figure} key={figure.name} />)}
        </div>);
};
const MangaCard = ({ info }) => {
    const { img, name, cost } = info;
    return (
        <div className='manga'>
            <img className='manga_img' alt='manga_img' src={img} />
            <p>{name}</p>
            <p>Ціна: {cost}</p>
        </div>);
};
