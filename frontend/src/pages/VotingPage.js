import React, { useState } from 'react';
import styles from '../styles/VotingPageStyle';


const VotingPage = () => {
    const players = [
        "Jude Bellingham", "Ousmane Dembélé", "Gianluigi Donnarumma", "Désiré Doué", "Denzel Dumfries",
        "Robert Lewandowski", "Mohamed Salah", "Kylian Mbappé", "Serhou Guirassy", "Vinícius Júnior",
        "Victor Gyökeres", "Erling Haaland", "Harry Kane", "Achraf Hakimi", "Khvicha Kvaratskhelia",
        "Alexis Mac Allister", "Lautaro Martinez", "Scott McTominay", "Nuno Mendes", "Joao Neves",
        "Micheal Olise", "Cole Palmer", "Pedri", "Raphinha", "Declan Rice",
        "Fabian Ruiz", "Virgil Van Dijk", "Vitinha", "Florian Writz", "Lamine Yamal"
    ];

    // State that keeps list of selected players with their ranking
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleVote = (player) => {
        const existing = selectedPlayers.find(p => p.name === player);

        if (existing) {
            // Remove player and adjust ranking
            const removedRank = existing.rank;
            let updated = selectedPlayers.filter(p => p.name !== player);
            updated = updated.map(p => ({
                ...p,
                rank: p.rank > removedRank ? p.rank - 1 : p.rank
            }));
            setSelectedPlayers(updated);
        } else {
            if (selectedPlayers.length < 10) {
                // Add player with next free ranking
                setSelectedPlayers([...selectedPlayers, { name: player, rank: selectedPlayers.length + 1 }]);
            }
        }
    };

    // Function to get the ranking of a selected player (null if not)
    const getPlayerRank = (player) => {
        const found = selectedPlayers.find(p => p.name === player);
        return found ? found.rank : null;
    };

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <h1 style={styles.title}>⚽ Ballon d'Or Voting ⚽</h1>
                <p style={styles.subtitle}>
                    Select your top 10 players and cast your vote!
                </p>
            </header>

            <main style={styles.grid}>
                {players.map(player => {
                    const rank = getPlayerRank(player);
                    return (
                        <button
                            key={player}
                            style={{
                                ...styles.playerBox,
                                position: 'relative',
                                backgroundColor: rank ? '#bfae48' : styles.playerBox.backgroundColor,
                                color: rank ? '#1a1a1a' : styles.playerBox.color,
                                fontWeight: rank ? '700' : styles.playerBox.fontWeight,
                                transform: rank ? 'scale(1.05)' : 'none',
                                transition: 'all 0.3s ease',
                            }}
                            onClick={() => handleVote(player)}
                        >
                            {player}
                            {rank && (
                                <span style={{
                                    position: 'absolute',
                                    top: '5px',
                                    right: '10px',
                                    backgroundColor: '#1a1a1a',
                                    color: '#bfae48',
                                    borderRadius: '50%',
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    userSelect: 'none',
                                }}>
                  {rank}
                </span>
                            )}
                        </button>
                    );
                })}
            </main>

            <footer style={styles.footer}>
                Powered by Football Passion &amp; Community Votes
            </footer>
        </div>
    );
};

export default VotingPage;
