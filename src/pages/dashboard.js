import React, { useState } from 'react';
import RoleSelector from './forms/RoleSelector'; // Importăm selectorul de rol
import {
    Box, Button, Typography, TextField, Select, MenuItem,
    FormControl, Card
} from '@mui/material';

const primaryButtonStyle = {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '6px 14px',
    borderRadius: '6px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#34495e',
    },
};

const books = [
    { title: 'În umbra vântului', type: 'ficțiune', price: 45, description: 'Roman captivant de Carlos Ruiz Zafón.' },
    { title: 'Atomic Habits', type: 'non-ficțiune', price: 60, description: 'James Clear îți arată cum obiceiurile mici duc la rezultate mari.' },
    { title: 'Fata din tren', type: 'mister', price: 50, description: 'Thriller psihologic de Paula Hawkins.' },
    { title: 'Mândrie și Prejudecată', type: 'romantic', price: 35, description: 'Clasicul lui Jane Austen.' },
    { title: '1984', type: 'ficțiune', price: 40, description: 'Distopie clasică de George Orwell.' },
    { title: 'The Lean Startup', type: 'non-ficțiune', price: 55, description: 'Metode moderne de antreprenoriat de Eric Ries.' },
    { title: 'Sherlock Holmes', type: 'mister', price: 48, description: 'Detective stories de Sir Arthur Conan Doyle.' },
    { title: 'Orgoliu și prejudecată', type: 'romantic', price: 38, description: 'Altă versiune clasică de Jane Austen.' },
];

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [bookType, setBookType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [purchasedBooks, setPurchasedBooks] = useState([]);
    const [showPurchased, setShowPurchased] = useState(false);
    const [role, setRole] = useState(''); // Stare pentru rolul selectat
    const [subscriptions, setSubscriptions] = useState([ // Exemplu de abonamente pentru admin
        { user: 'John Doe', subscriptionType: 'Premium', startDate: '01/01/2025', endDate: '01/01/2026' },
        { user: 'Jane Smith', subscriptionType: 'Standard', startDate: '02/01/2025', endDate: '02/01/2026' }
    ]);

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (bookType === '' || book.type === bookType) &&
            (priceRange === '' || book.price <= priceRange)
    );

    const handlePurchase = (book) => {
        setPurchasedBooks([...purchasedBooks, book]);
    };

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole); // Setează rolul
    };

    return (
        <Box sx={{ padding: 3, maxWidth: '1200px', margin: '0 auto' }}>
            {/* Afișăm selectorul de rol dacă nu există un rol selectat */}
            {!role ? (
                <RoleSelector onLogin={handleRoleSelection} />
            ) : (
                <>
                    {/* Navigare */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 4 }}>
                        <Button
                            variant={showPurchased ? 'outlined' : 'contained'}
                            sx={primaryButtonStyle}
                            onClick={() => setShowPurchased(false)}
                        >
                            Cărți Disponibile
                        </Button>
                        <Button
                            variant={showPurchased ? 'contained' : 'outlined'}
                            sx={primaryButtonStyle}
                            onClick={() => setShowPurchased(true)}
                        >
                            Cărțile Mele
                        </Button>
                    </Box>

                    {/* Afișează abonamentele dacă este Admin */}
                    {role === 'admin' && (
                        <Box sx={{ marginBottom: 4 }}>
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>Abonamente</Typography>
                            <Card sx={{ padding: 2, borderRadius: '12px', boxShadow: 3 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    Abonamentele utilizatorilor:
                                </Typography>
                                {subscriptions.map((sub, index) => (
                                    <Typography key={index} variant="body2">
                                        {sub.user} - {sub.subscriptionType} ({sub.startDate} - {sub.endDate})
                                    </Typography>
                                ))}
                            </Card>
                        </Box>
                    )}

                    {/* FILTRE */}
                    {!showPurchased && (
                        <Card sx={{ padding: 3, borderRadius: '12px', boxShadow: 3, marginBottom: 4 }}>
                            <Typography variant="h6" sx={{ marginBottom: 2, color: '#2c3e50' }}>
                                Filtrare Cărți
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Caută după titlu</Typography>
                                    <TextField
                                        placeholder="Introdu un titlu..."
                                        variant="outlined"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        fullWidth
                                        size="small"
                                    />
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Gen carte</Typography>
                                    <FormControl fullWidth size="small">
                                        <Select value={bookType} onChange={(e) => setBookType(e.target.value)} displayEmpty>
                                            <MenuItem value="">Toate genurile</MenuItem>
                                            <MenuItem value="ficțiune">Ficțiune</MenuItem>
                                            <MenuItem value="non-ficțiune">Non-Ficțiune</MenuItem>
                                            <MenuItem value="mister">Mister</MenuItem>
                                            <MenuItem value="romantic">Romantic</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Prețul maxim (RON)</Typography>
                                    <TextField
                                        placeholder="Introdu prețul maxim..."
                                        variant="outlined"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        fullWidth
                                        size="small"
                                        type="number"
                                    />
                                </Box>
                            </Box>
                        </Card>
                    )}

                    {/* Afișare Cărți */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                        {showPurchased
                            ? purchasedBooks.length > 0
                                ? purchasedBooks.map((book) => (
                                    <Card
                                        key={book.title}
                                        sx={{
                                            padding: 2,
                                            borderRadius: '12px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1,
                                            boxShadow: 3,
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{book.title}</Typography>
                                        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>{book.type}</Typography>
                                        <Typography variant="body1" sx={{ color: '#27ae60', fontWeight: 'bold' }}>{book.price} RON</Typography>
                                        <Typography variant="body2">{book.description}</Typography>
                                    </Card>
                                ))
                                : <Typography>Nu ai cărți cumpărate încă.</Typography>
                            : filteredBooks.map((book) => (
                                <Card
                                    key={book.title}
                                    sx={{
                                        padding: 2,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1,
                                        boxShadow: 3,
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{book.title}</Typography>
                                    <Typography variant="body2" sx={{ color: '#7f8c8d' }}>{book.type}</Typography>
                                    <Typography variant="body1" sx={{ color: '#27ae60', fontWeight: 'bold' }}>{book.price} RON</Typography>
                                    <Typography variant="body2">{book.description}</Typography>
                                    <Button sx={{ ...primaryButtonStyle, marginTop: 1 }} onClick={() => handlePurchase(book)}>
                                        Buy Now
                                    </Button>
                                </Card>
                            ))
                        }
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Dashboard;
