import React, { useState } from 'react';

const CoordinatesGame: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [backgroundImage, setBackgroundImage] = useState('');

    const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>, axis: 'x' | 'y') => {
        const value = Number(event.target.value);
        setPosition(prev => ({
            ...prev,
            [axis]: value,
        }));

        
        checkPolygon(value, axis);
    };

    const checkPolygon = (value: number, axis: 'x' | 'y') => {
        const x = axis === 'x' ? value : position.x;
        const y = axis === 'y' ? value : position.y;

        const isInPolygon =
            (x >= 20 && x <= 80 && y >= 20 && y <= 80) || 
            (x >= 50 && x <= 100 && y >= 0 && y <= 10) || 
            (x >= 0 && x <= 100 && y === 100); 

        if (isInPolygon) {
            setBackgroundImage('url(images/osama.png)');
        } else {
            setBackgroundImage('');
        }
    };

    const isOnPolygonEdge = (x: number, y: number) => {
        
        return (
            (x >= 20 && x <= 80 && y >= 20 && y <= 80) || 
            (x >= 50 && x <= 100 && y >= 0 && y <= 10) || 
            (x >= 0 && x <= 100 && y === 100) 
        );
    };

    const handleMove = (axis: 'x' | 'y', delta: number) => {
        const newValue = position[axis] + delta;
        if (isOnPolygonEdge(axis === 'x' ? newValue : position.x, axis === 'y' ? newValue : position.y)) {
            setPosition(prev => ({
                ...prev,
                [axis]: newValue,
            }));

            checkPolygon(newValue, axis);
        }
    };

    return (
        <div
            style={{
                position: 'relative',
                width: '400px',
                height: '400px',
                border: '1px solid black',
                backgroundImage,
                backgroundSize: 'cover', 
            }}
        >
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                <polygon points="40,50 80,40 80,600 40,600" fill="darkgrey" />
                <polygon points="40,50 5,50 10,600 40,600" fill="grey" />
                <polygon points="40,40 5,50 40,50 80,40" fill="lightgrey" />

                <polygon points="140,50 180,40 180,600 140,600" fill="darkgrey" />
                <polygon points="140,50 105,50 110,600 140,600" fill="grey" />
                <polygon points="140,40 105,50 140,50 180,40" fill="lightgrey" />
            </svg>
            <img src='images/plane.png' id='repcsi'
                style={{
                    position: 'absolute',
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    width: '40px',
                    height: '30px',
                }}
            />
            <div style={{ marginTop: '420px' }}>
                <label>
                    X:
                    <input
                        type="range"
                        min="0"
                        max="397"
                        value={position.x}
                        onChange={(e) => handlePositionChange(e, 'x')}
                    />
                </label>
                <label style={{ marginLeft: '20px' }}>
                    Y:
                    <input
                        type="range"
                        min="0"
                        max="397"
                        value={position.y}
                        onChange={(e) => handlePositionChange(e, 'y')}
                    />
                </label>
            </div>
        </div>
    );
};

export default CoordinatesGame;
