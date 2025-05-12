// CREAMOS UN COMPONENTE DE CERO

import { useEffect, useState } from 'react';
import './Counter.css';

const Counter = ({init = 0}) => {
    const [count, setCount] = useState(init);

    useEffect(() => {
        console.log('Se ha realizado un montaje');
        return () => {
            console.log('Se ha desmontado el componente');
        }
    }, [])

    useEffect(() => {
        if(count !== 0){
            console.log('Se ha realizado un updating');
        }
    }, [count])

    return (
        <div className="counter-container">
            <h2>Contador</h2>
            <p>El valor del contador es: {count}</p>
            <button onClick={() => setCount((prev) => ++prev)}>Sumar</button>
            <button onClick={() => setCount((prev) => --prev)}>Restar</button>
        </div>
    );
};

export default Counter;
