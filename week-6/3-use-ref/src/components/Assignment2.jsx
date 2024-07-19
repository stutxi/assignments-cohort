import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// let numberOfTimesReRendered = 0;

export function Assignment2() {
    // const [, forceRender] = useState(0);
    const [count, setCount] = useState(0);

    //another use case of useRef
    const numberOfTimesReRendered = useRef(0);

    // const [numberOfTimesReRendered, setNumberOfTimesReRendered] = useState(0); // worst way

    const handleReRender = () => {
        // Update state to force re-render
        // forceRender(Math.random());
        setCount(count + 1);
    };

    numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

    // numberOfTimesReRendered = numberOfTimesReRendered + 1; // one solution
    // the problem is -- never use global variable. outside react cycle - no variable

    return (
        <div>
            <p>This component has rendered {numberOfTimesReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};