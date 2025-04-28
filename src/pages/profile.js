import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

const Profile = () => {
    const router = useRouter();

    // Verificăm dacă utilizatorul este logat
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('authToken');
        if (!isLoggedIn) {
            router.push('/login'); // Redirecționăm dacă utilizatorul nu este logat
        }
    }, [router]);

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Profilul Meu
            </Typography>
            {/* Conținutul profilului */}
        </Box>
    );
};

export default Profile;
