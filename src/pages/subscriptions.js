import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';

// Stiluri pentru carduri
const cardStyle = {
    padding: '20px',
    maxWidth: '300px',
    width: '100%',
    textAlign: 'center',
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
};

const cardTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
};

const cardButtonStyle = {
    marginTop: '20px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#1abc9c',
    },
};

const Subscriptions = () => {
    return (
        <Box sx={{
            padding: '40px 20px',
            minHeight: '100vh',
            backgroundColor: '#ffefd5' // fundal din Dashboard
        }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
                Abonamente Lecturium
            </Typography>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                flexWrap: 'wrap'
            }}>
                {[
                    { title: "Abonament Gratuit", desc: "Acces la o carte pe lună.", price: "Gratuit" },
                    { title: "Abonament Standard", desc: "Acces la 10 cărți pe lună.", price: "50 RON" },
                    { title: "Abonament Nelimitat", desc: "Acces nelimitat la toate cărțile.", price: "200 RON" },
                ].map((plan, index) => (
                    <Card key={index} sx={cardStyle}>
                        <CardContent>
                            <Typography sx={cardTitleStyle}>{plan.title}</Typography>
                            <Typography variant="body1">{plan.desc}</Typography>
                            <Typography variant="h5" sx={{ marginTop: '10px' }}>{plan.price}</Typography>
                            <Link href="forms/login">
                                <Button sx={cardButtonStyle} fullWidth>
                                    Înregistrează-te
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Subscriptions;
