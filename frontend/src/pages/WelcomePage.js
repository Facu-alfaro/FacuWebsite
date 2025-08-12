import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/WelcomePageStyle';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>⚽ Welcome to Ballon d'Or Trivia! ⚽</h1>
            <p style={styles.text}>
                Ready to test your football knowledge and vote for your top 3 Ballon d'Or candidates?
                Dive in, select your favorites, and see if your picks match the crowd!
            </p>
            <button style={styles.button} onClick={() => navigate('/vote')}>
                Start Voting
            </button>
            <footer style={styles.footer}>
                Powered by Football Passion &amp; Community Votes
            </footer>
        </div>
    );
};

export default WelcomePage;
