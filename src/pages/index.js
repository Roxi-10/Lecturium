import React from 'react';
import { Button, Container, Typography, Box, Paper } from '@mui/material';

// Stilizare personalizată cu noua paletă
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#2e3b55',
    color: '#fff',
};

const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#ff6f61',
    fontFamily: 'Roboto, sans-serif',
};

const sloganStyle = {
    marginTop: '20px',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'center',
};

const buttonStyle = {
    backgroundColor: '#16a085',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '#1abc9c',
    },
};

// Componenta pentru cardul de preț
const PricingCard = ({ priceItem }) => {
    return (
        <Paper sx={{ flex: 1, p: 3, margin: '10px', borderRadius: '10px', textAlign: 'center', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" sx={{ color: '#2e3b55' }}>{priceItem.title}</Typography>
            <Typography variant="h4" sx={{ color: '#2e3b55', fontWeight: 'bold' }}>
                {priceItem.price} {priceItem.currency}
            </Typography>
            <Typography variant="body1" sx={{ color: '#2e3b55' }}>
                {priceItem.description}
            </Typography>
            <BuyNowButton priceItem={priceItem} />
        </Paper>
    );
};

const BuyNowButton = ({ priceItem }) => {
    const buyNowHandler = () => {
        alert(`Cumpărat: ${priceItem.title}`);
    };

    return (
        <Button onClick={buyNowHandler} variant="contained" sx={{ backgroundColor: '#16a085', color: '#fff', mt: 2, '&:hover': { backgroundColor: '#1abc9c' } }}>
            Buy Now
        </Button>
    );
};

const Home = () => {
    const priceItems = [
        { id: 1, title: 'Pachet 1', price: '50', currency: 'RON', description: 'Acces la 10 cărți' },
        { id: 2, title: 'Pachet 2', price: '90', currency: 'RON', description: 'Acces nelimitat la cărți' },
    ];

    return (
        <Container>
            <Box sx={headerStyle}>
                <Typography sx={titleStyle}>Lecturium</Typography>
                <Box>
                    <Button sx={buttonStyle}>Log In</Button>
                    <Button sx={buttonStyle}>Sign Up</Button>
                </Box>
            </Box>

            <Box sx={sloganStyle}>
                <Typography variant="h4">Lecturium - Descoperă magia cititului!</Typography>
                <Typography variant="body1">Începe călătoria ta prin lumi fascinante de cărți.</Typography>
            </Box>

            <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
                <Button sx={buttonStyle}>Prețuri</Button>
                <Button sx={buttonStyle}>Informații</Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                {priceItems.map((priceItem) => (
                    <PricingCard key={priceItem.id} priceItem={priceItem} />
                ))}
            </Box>
        </Container>
    );
};

export default Home;
