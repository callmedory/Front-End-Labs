import React, { useState } from 'react'
import '../css/Header.css'

export default function Header() {
    const [firstStyle, setFirstStyle] = useState({ background: 'rgb(255, 166, 134)', color: '#516364' });
    const [secondStyle, setSecondStyle] = useState({ background: '#b7ffc3', color: '#788788' });

    const changeFirstElement = () => {
        setFirstStyle({
            background: getRandomColor(),
            color: getRandomColor()
        });
    }

    const changeSecondElement = () => {
        setSecondStyle({
            background: getRandomColor(),
            color: getRandomColor()
        });
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <>
            <div id="first_element" onClick={changeFirstElement} style={firstStyle}>
                <h2>Реу Дар'я Юріївна</h2>
            </div>
            <div className="second_element" onClick={changeSecondElement} style={secondStyle}>
                Місце народження: 14 липня, 2004 року, м. Ізмаїл
            </div>
        </>
    )
}