import React, { useRef, useState } from 'react';

function RefParc() {
    const renderCountRef = useRef(0);
    const [stateCount, setStateCount] = useState(0); 

    const incrementRef = () => {
        renderCountRef.current = renderCountRef.current +  1;
        console.log('Ref Count:', renderCountRef.current); 
    };

    const incrementState = () => {
        setStateCount(stateCount + 1);
    };

    return (
        <div>
            <h1>State Count: {stateCount}</h1>
            <h1>Ref Count (no re-render): {renderCountRef.current}</h1>
            <button onClick={incrementRef}>Increment Ref</button>
            <button onClick={incrementState}>Increment State</button>
        </div>
    );
}

export default RefParc;
