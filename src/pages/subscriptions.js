// pages/subscriptions.js

import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

// Stiluri pentru carduri
const cardStyle = {
    marginBottom: '20px',
    padding: '20px',
    maxWidth: '300px',
    width: '100%',
    textAlign: 'center',
};

const cardTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
};

const cardButtonStyle = {
    marginTop: '20px',
    backgroundColor: '#2c3e50', // Culoare mai închisă
    color: '#fff', // Text alb
    '&:hover': {
        backgroundColor: '#1abc9c',
    },
};

const Subscriptions = () => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px' }}>
                Abonamente Lecturium
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {/* Abonament Gratuit */}
                <Card sx={cardStyle}>
                    <CardContent>
                        <Typography sx={cardTitleStyle}>Abonament Gratuit</Typography>
                        <Typography variant="body1">Acces la o carte pe lună.</Typography>
                        <Typography variant="h5" sx={{ marginTop: '10px' }}>Gratuit</Typography>
                        <Button sx={cardButtonStyle} fullWidth>
                            Înregistrează-te
                        </Button>
                    </CardContent>
                </Card>

                {/* Abonament Standard */}
                <Card sx={cardStyle}>
                    <CardContent>
                        <Typography sx={cardTitleStyle}>Abonament Standard</Typography>
                        <Typography variant="body1">Acces la 10 cărți pe lună.</Typography>
                        <Typography variant="h5" sx={{ marginTop: '10px' }}>50 RON</Typography>
                        <Button sx={cardButtonStyle} fullWidth>
                            Înregistrează-te
                        </Button>
                    </CardContent>
                </Card>

                {/* Abonament Nelimitat */}
                <Card sx={cardStyle}>
                    <CardContent>
                        <Typography sx={cardTitleStyle}>Abonament Nelimitat</Typography>
                        <Typography variant="body1">Acces nelimitat la toate cărțile.</Typography>
                        <Typography variant="h5" sx={{ marginTop: '10px' }}>200 RON</Typography>
                        <Button sx={cardButtonStyle} fullWidth>
                            Înregistrează-te
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Subscriptions;
