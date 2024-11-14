import { useState } from 'react';
import styles from './surprisePage.module.css';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

function Surprise() {
    const [currentScreen, setCurrentScreen] = useState(0);

    const CustomButton = styled(Button)({
        color: 'white',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'black',
        },
    });

    const ScreenOne = ({ onSubmit }) => (
        <div>
            <h3>What is 2 + 2?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenTwo = ({ onSubmit }) => (
        <div>
            <h3>Q1: 2 6 12 20 30 ?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenThree = ({ onSubmit }) => (
        <div>
            <h3>Q2: I am an odd number. Take away one letter, and I become even. What number am I?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );
    

    // const ScreenThree = ({ onBlueClick }) => (
    //     <div>
    //         <h3>Q2: Choose your path:</h3>
    //         <Button
    //             variant="contained"
    //             style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px' }}
    //             onClick={onBlueClick}
    //         >
    //             Blue Button
    //         </Button>
    //         <Button
    //             variant="contained"
    //             style={{ backgroundColor: 'red', color: 'white' }}
    //             onClick={() => setCurrentScreen(0)}
    //         >
    //             Red Button
    //         </Button>
    //     </div>
    // );

    const ScreenFour = ({ onSubmit }) => (
        <div>
            <h3>Q3: What is the capital of France?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );
    
    const ScreenFive = ({ onSubmit }) => (
        <div>
            <h3>Q4: What is the capital of France?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const answers = ["-", "42", "seven", "b"]; // Correct answers for screens

    const screens = [
        <ScreenOne key="screen1" onSubmit={(e) => handleAnswer(e, 0)} />,
        <ScreenTwo key="screen2" onSubmit={(e) => handleAnswer(e, 1)} />,
        <ScreenThree key="screen3" onSubmit={(e) => handleAnswer(e, 2)} />,
        <ScreenFour key="screen4" onSubmit={(e) => handleAnswer(e, 3)} />,
        <ScreenFive key="screen5" onSubmit={(e) => handleAnswer(e, 4)} />,

    ];

    const handleAnswer = (e, screenIndex) => {
        e.preventDefault();
        const userAnswer = e.target[0].value.trim();

        if (userAnswer.toLowerCase() === answers[screenIndex].toLowerCase()) {
            if (currentScreen < screens.length - 1) {
                setCurrentScreen(currentScreen + 1);
            }
        } else {
            // setCurrentScreen(0);
        }

        e.target.reset(); // Clear the input field
    };

    return (
        <div className={styles.page}>
            {currentScreen === 0 ? (
                <>
                    <h1>Welcome</h1>
                    <p>You have been selected to solve this mystery...<br></br>
                    For each question you can ask a single person for help.
                    </p>
                    <CustomButton onClick={() => setCurrentScreen(1)}>
                        Collaboratio maximi momenti
                    </CustomButton>
                </>
            ) : (
                screens[currentScreen]
            )}
        </div>
    );
}

export default Surprise;
