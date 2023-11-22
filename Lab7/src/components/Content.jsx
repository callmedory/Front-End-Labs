import React, { useState } from 'react';
import dublinbridge from '../images/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_(97037639)_(cropped).jpeg';

export const Content = () => {
    const [listStyles, setListStyles] = useState([]);

    const changeListElementColor = (index) => {
        const newListStyles = [...listStyles];
        newListStyles[index] = {
            background: getRandomColor(),
            color: getRandomColor()
        };
        setListStyles(newListStyles);
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <>
            <h3>Освіта:</h3>
            <ol>
                <li style={listStyles[0]} onClick={() => changeListElementColor(0)}>Ізмаїльський ліцей №1</li>
                <li style={listStyles[1]} onClick={() => changeListElementColor(1)}>Ізмаїльський політехнічний ліцей</li>
                <li style={listStyles[2]} onClick={() => changeListElementColor(2)}>НТУУ "КПІ", м. Київ</li>
            </ol>   

            <h3>Мої хобі:</h3>
            <ul>
                <li>Відеоігри</li>
                <li>Малювання</li>
                <li>Рукоділля</li>
            </ul>

            <h3>Мої улюблені книги та фільми:</h3>
            <ol>
                <li style={listStyles[3]} onClick={() => changeListElementColor(3)}>Відьмак (серія книг)</li>
                <li style={listStyles[4]} onClick={() => changeListElementColor(4)}>Леді Макбет</li>
                <li style={listStyles[5]} onClick={() => changeListElementColor(5)}>Sunburn</li>
            </ol>

            <p>Дублін (також Даблін від англ. Dublin, ірл. Baile Átha Cliath) — столиця Ірландії. Розташований у гирлі річки Ліффі, що впадає в затоку Дублін Ірландського моря. Населення 1,450,701 (2022), з передмістями — близько 2 мільйонів.</p>
            <p>Місто виникло при злитті поселень Dubh Linn («глибокий затон» або «темна гавань») і Baile Atha Cliath («місце у броду, зарослого лозою») десь близько 700 року нової ери. Історично місто Дублін та околиці належали до давнього ірландського королівства Ленстер (Лагін). 
                У VIII столітті місто і околиці завоювали вікінги, заснувавши невелике королівство Дублін. Після того як ірландські королі розгромили вікінгів, вони посадили в королівстві Дублін свою ірландську династію. 
                Після англо-норманського завоювання у ХІІ столітті Дублін став столицею так званого Пейлу — англійської колонії в Ірландії, а потім, після розширення англійських володінь Дублін став столицею «королівства Ірландії», що було під владою Англії. 
                З початку англійського правління з XII століття Дублін був столицею різних державних утворень на острові. Оборона міста спиралася на Дублінський замок, побудований англійцями в XIII столітті. У 1348 році в Дубліні була епідемія чуми — майже все населення вимерло. 
                На Дублін неодноразово здійснювали походи ірландські повстанці під час нескінченних повстань за незалежність Ірландії. З XVII століття місто швидко росло, і у свій час було другим за величиною містом Сполученого Королівства Велика Британія. 
                У 1916 році Дублін став ареною Великоднього повстання за незалежність Ірландії. Особливо жорстокі бої між повстанцями та британськими військами точилися біля поштамту. 
                Після проголошення незалежності Ірландії в 1922 році, місто стало столицею ірландської держави, де в червні-липні тривали вуличні бої.
            </p>

            <img src={dublinbridge} alt="Samuel Beckett Bridge"/>
        </>
    );
};