import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import styles from '../styles/homePage.module.css';

function Home() {
    let navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className={styles.summary}>
                <h1>Laurens de Bruin</h1>
                <h2>Software Developer</h2>
            </div>
        </div>
    );
}

export default Home;
