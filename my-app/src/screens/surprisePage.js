import { useState, useEffect } from 'react';
import styles from './surprisePage.module.css';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import steganography from "../assets/images/steganography.png";
import code from "../assets/images/code.png";

function Surprise() {
    const [currentScreen, setCurrentScreen] = useState(0);

    const CustomButton = styled(Button)({
        color: 'white',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'black',
        },
    });

    const ObfuscatedText = ({ text = '', interval = 100 }) => {
        const [displayedText, setDisplayedText] = useState(text);
      
        useEffect(() => {
          if (!text) return; // Handle cases where text might be undefined or empty
          
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
          
          const obfuscate = () => {
            const obfuscated = text.split('').map((char) => {
              return char === ' ' ? ' ' : characters[Math.floor(Math.random() * characters.length)];
            });
            setDisplayedText(obfuscated.join(''));
          };
      
          const intervalId = setInterval(obfuscate, interval);
      
          return () => clearInterval(intervalId); // Clean up interval
        }, [text, interval]);
      
        return <span style={{color: "red"}}>{displayedText}</span>;
      };

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

    const Screen3point5 = ({ onSubmit }) => (
        <div>
            <h2>4195</h2>
            <h3>Q3: </h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const Screen3point6 = ({ onSubmit }) => (
        <div>
            <h3>Q4: What do people do at Loonsche Duynen?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenFour = ({ onSubmit }) => (
        <div>
            <img src={steganography} style={{width: 400}} alt="steganography" />
            <h3>Q5: </h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );
    
    const ScreenFive = ({ onSubmit }) => (
        <div>
            <h3>Q6: Where does BMW MTC meet? ____ HP</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenSix = ({ onSubmit }) => (
        <div>
            <h3>Q7: +BIAB + -BIAB</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenSeven = ({ onSubmit }) => (
        <div>
            <h3>Q8: 🟠🔵🏍🖥  1:33:50 ⏸</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenEight = ({ onSubmit }) => (
        <div>
            <img src={code} style={{width: 400}} alt="code" />
            <h3>Q9: What is printed by this code?</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenTen = ({ onSubmit }) => (
        <div>
            <h3>Q10: </h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="" />
            </form>
        </div>
    );

    const ScreenEleven = ({ onSubmit }) => (
        <div>
            <h1>🎉 Congratulations! 🎉</h1>
            <p>You have solved the mystery!</p>
            <p>Now you can find your reward at ...</p>
        </div>
    );

    const answers = ["-", "42", "seven", "4195", "golf", "echo", "5275", "55", "609", "17", "placeholder"];

    const screens = [
        <ScreenOne key="screen1" onSubmit={(e) => handleAnswer(e, 0)} />,
        <ScreenTwo key="screen2" onSubmit={(e) => handleAnswer(e, 1)} />,
        <ScreenThree key="screen3" onSubmit={(e) => handleAnswer(e, 2)} />,
        <Screen3point5 key="screen3.5" onSubmit={(e) => handleAnswer(e, 3)} />,
        <Screen3point6 key="screen3.6" onSubmit={(e) => handleAnswer(e, 4)} />,
        <ScreenFour key="screen4" onSubmit={(e) => handleAnswer(e, 5)} />,
        <ScreenFive key="screen5" onSubmit={(e) => handleAnswer(e, 6)} />,
        <ScreenSix key="screen6" onSubmit={(e) => handleAnswer(e, 7)} />,
        <ScreenSeven key="screen7" onSubmit={(e) => handleAnswer(e, 8)} />,
        <ScreenEight key="screen8" onSubmit={(e) => handleAnswer(e, 9)} />,
        <ScreenTen key="screen10" onSubmit={(e) => handleAnswer(e, 10)} />,
        <ScreenEleven key="screen11" />
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
                    <p>You have been selected by <ObfuscatedText text="Laurens"/> to solve this mystery...<br></br>
                    For each question you can ask a single person for help (except <ObfuscatedText text="Laurens"/>).<br></br>
                    Others can google the answers, but you can't. Good luck!
                    </p>
                    <CustomButton onClick={() => setCurrentScreen(1)}>
                        I'm ready
                    </CustomButton>
                </>
            ) : (
                screens[currentScreen]
            )}
        </div>
    );
}

export default Surprise;
