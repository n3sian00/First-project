import React from 'react';

const Header = ({ title }) => {
    return (
        <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f5f5f5' }}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
