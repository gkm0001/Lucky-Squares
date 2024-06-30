import { useState } from 'react';
import Square from './Square';

function Board(): JSX.Element {
    const [arr, setArr] = useState(Array(9).fill(null));
    const [win, setWin] = useState<string>('');
    const [selected, setSelected] = useState<string | number | null>(null);
  
    const handleClick = (index: number) => {
        const randomNumber: number = Math.floor(Math.random() * 10) + 1;
        const newArr = Array(arr.length).fill(null);
        newArr[index] = randomNumber;
        setArr(newArr);
        if (selected !== null) {
            checkWin(randomNumber, selected);
        }
    };

    const handleSelect = (value: string | number) => {
        setSelected(value);
        setWin(''); // Reset win status when a new criterion is selected
    };

    const checkWin = (number: number, criterion: string | number) => {
        if (criterion === 'even' && number % 2 === 0) {
            setWin('winner');
        } else if (criterion === 'odd' && number % 2 !== 0) {
            setWin('winner');
        } else if (criterion === number) {
            setWin('winner');
        } else {
            setWin('looser');
        }
    };

    return (
        <div className='parent-div'>
            <div style={{ display: 'flex' }} className='parent-div-1'>
                <Square onClick={() => handleClick(0)} disabled={!selected} value={arr[0]} />
                <Square onClick={() => handleClick(1)} disabled={!selected} value={arr[1]} />
                <Square onClick={() => handleClick(2)} disabled={!selected} value={arr[2]} />
            </div>
            <div style={{ display: 'flex' }} className='parent-div-2'>
                <Square onClick={() => handleClick(3)} disabled={!selected} value={arr[3]} />
                <Square onClick={() => handleClick(4)} disabled={!selected} value={arr[4]} />
                <Square onClick={() => handleClick(5)} disabled={!selected} value={arr[5]} />
            </div>
            <div style={{ display: 'flex' }} className='parent-div-3'>
                <Square onClick={() => handleClick(6)} disabled={!selected} value={arr[6]} />
                <Square onClick={() => handleClick(7)} disabled={!selected} value={arr[7]} />
                <Square onClick={() => handleClick(8)} disabled={!selected} value={arr[8]} />
            </div>
            <div className='button-div'>
                Choose Number
                {arr.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleSelect(index + 1)} 
                        className={`button-index-div ${selected === index + 1 ? 'selected' : ''}`}>
                        {index + 1}
                    </button>
                ))}
                <button 
                    onClick={() => handleSelect('odd')} 
                    className={`button-odd ${selected === 'odd' ? 'selected' : ''}`}>
                    Odd
                </button>
                <button 
                    onClick={() => handleSelect('even')} 
                    className={`button-even ${selected === 'even' ? 'selected' : ''}`}>
                    Even
                </button>
            </div>
            <div className='Result'>
                {win === 'winner' ? 'Win the match' : win === 'looser' ? 'Loose the match' : ''}
            </div>
        </div>
    );
}

export default Board;
