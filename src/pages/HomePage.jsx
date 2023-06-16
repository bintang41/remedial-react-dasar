import React from 'react';
import { useNavigate } from 'react-router-dom'

function HomePage() {
const navigate = useNavigate();

const handleClickButton = (e) => {
    e.preventDefault();

    navigate("/credentials")
};
    return (
        <div>
            <h1> Welcome to Password Manager</h1>
            <button onClick={handleClickButton}>Get Started</button>
        </div>
    );
}

export default HomePage;