import { useState } from 'react';
import './Tips.css';


function Tips() {
    const [currentTip, setCurrentTip] = useState('Heet kluppers welkom bij activiteit')
    return (
        <div className='tips'>
            <h2>Tips</h2>
            <p>{currentTip}</p>
            <div className='tipsDotsIcon'>
                <i class="fas fa-circle blue"></i>
                <i class="fas fa-circle"></i>
                <i class="fas fa-circle"></i>
            </div>
            <div className='tipsProgression' />
        </div>
    );
}

export default Tips;
