import { useState } from 'react';

import Counter from '../Counter/Counter.jsx'
import './Container.css';

const Container = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='container'>
            <h1>Panel contador</h1>
            <button onClick={() => setShow(prev => !prev)} className='toggle-button'>{show ? 'Ocultar Contador' : 'Mostrar Contador'}</button>
            {show && <Counter />}
        </div>
    )
}

export default Container