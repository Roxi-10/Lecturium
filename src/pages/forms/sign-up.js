import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Parolele nu se potrivesc!");
        } else {
            // Doar afișăm datele pentru a arăta că formularul funcționează
            alert(`Contul a fost creat cu succes! \nNume: ${firstName} ${lastName} \nEmail: ${email} \nTip utilizator: ${userType}`);
        }
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ marginBottom: '20px' }}>Înscriere</Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }}>
                    {/* Nume și Prenume */}
                    <TextField
                        label="Nume"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        size="small"
                    />
                    <TextField
                        label="Prenume"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        size="small"
                    />
                    {/* Email */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="small"
                    />
                    {/* Parola */}
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
                    {/* Confirmă parola */}
                    <TextField
                        label="Confirmă parola"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        size="small"
                    />
                    {/* Tip utilizator */}
                    <FormControl fullWidth margin="normal" size="small">
                        <InputLabel>Tip utilizator</InputLabel>
                        <Select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            label="Tip utilizator"
                        >
                            <MenuItem value="user">User</MenuItem>
                            <MenuItem value="administrator">Administrator</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#16a085', marginTop: '20px' }}>
                        Înregistrează-te
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SignUp;
