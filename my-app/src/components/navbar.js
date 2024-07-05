import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from '../styles/navbar.module.css';

function Navbar() {
    let navigate = useNavigate();

    return (
        <div className={styles.navbar}>
            <Stack direction="row" spacing={{ xs: 0, sm: 1, md: 6 }}>
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button onClick={() => navigate('/resume')}>Resume</Button>
                <Button onClick={() => navigate('/projects')}>Projects</Button>
                <Button onClick={() => navigate('/photography')}>Photography</Button>
                <Button onClick={() => navigate('/hobby')}>Hobby</Button>
            </Stack>
        </div>
    );
}

export default Navbar;