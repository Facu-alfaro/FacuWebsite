const gold = '#FFD700';

const styles = {
    page: {
        minHeight: '100vh',
        backgroundColor: '#0d0d0d',
        color: gold,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        textAlign: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: '3rem',
        marginBottom: 5,
        textShadow: `0 0 10px ${gold}`,
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: '300',
        color: '#f0c542',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // exactly 3 columns
        gridTemplateRows: 'repeat(10, 1fr)',    // exactly 5 rows
        gap: '40px',
        flexGrow: 1,
    },
    playerBox: {
        backgroundColor: '#1a1a1a',
        border: `2px solid ${gold}`,
        borderRadius: '50px',
        padding: '40px', // thinner vertically, wider horizontally
        color: gold,
        fontWeight: '600',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: `0 0 10px rgba(255, 215, 0, 0.5)`,
        textAlign: 'center',

    },

    footer: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: '0.9rem',
        fontWeight: '300',
        color: '#a8891e',
    },
};

export default styles;
