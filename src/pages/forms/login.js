import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Doar afișăm datele pentru a arăta că formularul funcționează
        alert(`Autentificat cu succes! Email: ${email}`);
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ marginBottom: '20px' }}>Log In</Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="small"
                    />
                    <TextField
                        label="Parolă"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="small"
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#16a085', marginTop: '20px' }}>
                        Log In
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
