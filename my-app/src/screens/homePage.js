import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Home() {
    let navigate = useNavigate();

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={() => navigate('/somepath')}>Go to Some Path</Button>
                <Button variant="contained" onClick={() => navigate('/anotherpath')}>Go to Another Path</Button>
            </Stack>
        </div>
    );
}

export default Home;
