import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

function Home() {
    let navigate = useNavigate();

    return (
        <div>
            <Navbar />
        </div>
    );
}

export default Home;
