import React from 'react';


import Header from './components/Header';
import { Content } from './components/Content';
import Image from './components/Image';
import GoodsCard  from './components/GoodsCard';


function App() {
    return (
        <div className='App'>
            {/* Task#1 */}
            <Header/>
            <Content/>
            <Image/>
            
            {/* Task#2 */}
            <GoodsCard/>
        </div>
    );
}


export default App;