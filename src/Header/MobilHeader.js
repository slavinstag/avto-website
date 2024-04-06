import React, { useState } from 'react';
import './Header.css'; 

function MobilHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-menu">
            <button onClick={toggleDropdown}>Меню</button>
            {isOpen && (
                <ul>
                    <li>Пункт 1</li>
                    <li>Пункт 2</li>
                    <li>Пункт 3</li>
                </ul>
            )}
        </div>
    );
}

export default MobilHeader;