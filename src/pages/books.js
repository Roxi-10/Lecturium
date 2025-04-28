import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Books = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceRange(event.target.value);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>Căutare Cărți</Typography>

            {/* Căutare */}
            <TextField
                label="Căutare carte"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ marginBottom: '20px' }}
            />

            {/* Tip carte */}
            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                <InputLabel id="book-type-label">Tip carte</InputLabel>
                <Select
                    labelId="book-type-label"
                    value={selectedType}
                    label="Tip carte"
                    onChange={handleTypeChange}
                >
                    <MenuItem value="fiction">Ficțiune</MenuItem>
                    <MenuItem value="non-fiction">Non-ficțiune</MenuItem>
                    <MenuItem value="biography">Biografie</MenuItem>
                    {/* Adaugă mai multe tipuri de cărți aici */}
                </Select>
            </FormControl>

            {/* Filtru preț */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <Typography>Preț de la: {priceRange[0]} Lei</Typography>
                <Typography>Preț până la: {priceRange[1]} Lei</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="primary" onClick={() => setPriceRange([0, 50])}>0-50 Lei</Button>
                <Button variant="contained" color="primary" onClick={() => setPriceRange([51, 100])}>51-100 Lei</Button>
                <Button variant="contained" color="primary" onClick={() => setPriceRange([101, 200])}>101-200 Lei</Button>
            </Box>

            {/* Afișare cărți */}
            <Box sx={{ marginTop: '20px' }}>
                <Typography variant="h5">Cărțile disponibile:</Typography>
                {/* Aici va fi lista de cărți filtrată după căutare, tip și preț */}
                {/* Poți adăuga un map pentru a itera prin cărți și a le afișa */}
            </Box>
        </Box>
    );
};

export default Books;
