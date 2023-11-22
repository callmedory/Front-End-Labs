import React, { useState } from 'react';
import '../css/Image.css'
import dublin from '../images/dublin-ireland-DUBLINTG0721-e1066115faf74b958a7b1d792ba13c1c.jpg';


function Image() {
    const [isVisible, setVisible] = useState(false);
    const [imgHeight, setHeight] = useState(400);
    const [imgWidth, setWidth] = useState(500);
    return (<>
            <Buttons setVisible={setVisible} setHeight={setHeight} setWidth={setWidth}></Buttons>
            {isVisible && <Img imgHeight={imgHeight} imgWidth={imgWidth} />}
        </>);
};

const Img = ({ imgHeight, imgWidth }) => {
    return <img style={{ width: imgWidth + 'px', height: imgHeight + 'px' }} src={dublin} alt='dublin'/>;
};

const Buttons = ({ setVisible, setHeight, setWidth }) => {
    return (
        <div>
            <button onClick={() => setVisible(true)}>Додати</button>
            <button onClick={() => {setHeight(prev => prev * 1.1);
                                    setWidth(prev => prev * 1.1)}}>Збільшити</button>
            <button onClick={() => {setHeight(prev => prev * 0.9);
                                    setWidth(prev => prev * 0.9)}}>Зменшити</button>
            <button onClick={() => setVisible(false)}>Видалити</button>
        </div>
    );
};

export default Image;