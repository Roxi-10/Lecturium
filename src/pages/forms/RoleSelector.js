import React, { useState } from 'react';
import { Box, Button, Typography, Select, MenuItem, FormControl } from '@mui/material';

const RoleSelector = ({ onLogin }) => {
    const [role, setRole] = useState('');

    const handleLogin = () => {
        if (role) {
            onLogin(role);
        }
    };

    return (
        <Box sx={{ padding: 4, maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
                Selectează Rolul
            </Typography>

            <FormControl fullWidth sx={{ marginBottom: 3 }}>
                <Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    displayEmpty
                >
                    <MenuItem value="">Alege un rol...</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                </Select>
            </FormControl>

            <Button variant="contained" sx={{ backgroundColor: '#2c3e50' }} onClick={handleLogin}>
                Continuă
            </Button>
        </Box>
    );
};

export default RoleSelector;
