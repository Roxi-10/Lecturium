import React from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import Link from 'next/link';

// Stiluri
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: '#333',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '30px',
};

const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ff6f61',
    fontFamily: 'Roboto, sans-serif',
};

const primaryButtonStyle = {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '6px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#34495e',
    },
};

const Home = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flex: 1, padding: '20px' }}>
                {/* Header */}
                <Box sx={headerStyle}>
                    <Typography sx={titleStyle}>Lecturium</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Butoane de navigare */}
                        <Link href="/dashboard" passHref>
                            <Button sx={primaryButtonStyle}>Dashboard</Button>
                        </Link>
                        <Link href="/forms/login" passHref>
                            <Button sx={{ ...primaryButtonStyle, marginLeft: '8px' }}>Login</Button>
                        </Link>
                        <Link href="/forms/sign-up" passHref>
                            <Button sx={{ ...primaryButtonStyle, marginLeft: '8px' }}>Sign Up</Button>
                        </Link>
                    </Box>
                </Box>

                {/* Slogan */}
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Lecturium - Descoperă magia cititului!
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Începe călătoria ta prin lumi fascinante de cărți.
                </Typography>

                {/* Carduri */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px', gap: '20px', flexWrap: 'wrap' }}>
                    {[{ title: 'Vezi Prețuri', text: 'Descoperă pachetele de prețuri și ce îți oferă fiecare.', link: '/subscriptions' },
                        { title: 'Despre Lecturium', text: 'Află mai multe despre Lecturium și misiunea noastră.', link: '/about' },
                        { title: 'Întrebări Frecvente', text: 'Răspunsuri la întrebările frecvente pe care le ai despre Lecturium.', link: '/faq' }]
                        .map((item, index) => (
                            <Card key={index} sx={{ width: '250px', padding: '20px' }}>
                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2" sx={{ marginTop: '10px' }}>{item.text}</Typography>
                                    <Link href={item.link} passHref>
                                        <Button sx={{ ...primaryButtonStyle, marginTop: '10px' }} fullWidth>
                                            {item.title}
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                </Box>
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    textAlign: 'center',
                    padding: '20px 10px',
                    fontSize: '14px',
                    color: '#777',
                    borderTop: '1px solid #eee',
                    backgroundColor: 'transparent',
                }}
            >
                <Typography>Contact: contact@lecturium.ro | Telefon: 0800-123-456</Typography>
                <Typography> Echipa Galbenă - MetaMinds</Typography>
            </Box>
        </Box>
    );
};

export default Home;
