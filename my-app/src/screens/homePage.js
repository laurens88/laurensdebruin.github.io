import React from 'react';
import {useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();

    return (
    <div>
    <h1>Test</h1>
    <button onClick={() => navigate('/resume')}>Go to Resume</button>
    </div>
    );
    }

export default Home;