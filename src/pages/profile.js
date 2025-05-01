import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from '@mui/material';

const Profile = () => {
    const [currentBook, setCurrentBook] = useState({
        title: 'În umbra vântului',
        author: 'Carlos Ruiz Zafón',
        description: 'Roman captivant despre iubire, mister și descoperiri neașteptate.',
        imageUrl: '/path-to-image.jpg',
    });

    const [pageNumber, setPageNumber] = useState('');
    const [review, setReview] = useState('');
    const [progressAndReviews, setProgressAndReviews] = useState([]);  // Array pentru progres și recenzii

    const handlePageChange = (event) => {
        setPageNumber(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSave = () => {
        if (pageNumber && review) {
            // Adăugăm progresul și recenzia la array
            setProgressAndReviews([
                ...progressAndReviews,
                { pageNumber, review }
            ]);

            // Resetăm câmpurile de pagină și recenzie după salvare
            setPageNumber('');
            setReview('');
        } else {
            alert("Te rog completează atât pagina cât și recenzia.");
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: 4, maxWidth: '1000px', margin: '0 auto', padding: 3 }}>
            {/* Sidebar cu informații și progres/recenzii */}
            <Box sx={{ minWidth: '250px', backgroundColor: '#fff3e0', borderRadius: '12px', padding: 2, boxShadow: 2 }}>
                <Typography variant="h6" sx={{ color: '#ff6f61', marginBottom: 2 }}>Informații carte</Typography>
                <Typography variant="body1"><strong>Titlu:</strong> {currentBook.title}</Typography>
                <Typography variant="body1"><strong>Autor:</strong> {currentBook.author}</Typography>
                <Typography variant="body1"><strong>Pagină curentă:</strong> {pageNumber || '—'}</Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}><strong>Recenzie:</strong></Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{review || '—'}</Typography>

                {/* Afișează progresul și recenziile în partea stângă */}
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 2, color: '#333' }}>Progresul și Recenziile tale</Typography>
                    {progressAndReviews.length === 0 ? (
                        <Typography variant="body1" sx={{ color: '#7f8c8d' }}>Nu ai adăugat încă progres sau recenzie.</Typography>
                    ) : (
                        progressAndReviews.map((item, index) => (
                            <Box key={index} sx={{ marginBottom: 2 }}>
                                <Typography variant="body1"><strong>Pagina {item.pageNumber}:</strong> {item.review}</Typography>
                            </Box>
                        ))
                    )}
                </Box>
            </Box>

            {/* Conținut principal */}
            <Box sx={{ flex: 1, backgroundColor: '#ffebcd', borderRadius: '12px', padding: 3 }}>
                <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center', color: '#ff6f61' }}>Profilul Meu</Typography>

                {/* Card cu detalii carte */}
                <Card sx={{ padding: 3, marginBottom: 4, boxShadow: 3, borderRadius: '12px', display: 'flex', flexDirection: 'row', gap: 3, backgroundColor: '#ffffff' }}>
                    <img
                        src={currentBook.imageUrl}
                        alt={currentBook.title}
                        style={{ width: '120px', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>{currentBook.title}</Typography>
                        <Typography variant="body1" sx={{ color: '#7f8c8d' }}>De {currentBook.author}</Typography>
                        <Typography variant="body2" sx={{ marginTop: 1, color: '#555' }}>{currentBook.description}</Typography>
                    </Box>
                </Card>

                {/* Select pagină */}
                <Box sx={{ marginBottom: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 1, color: '#333' }}>Selectează pagina la care ai rămas</Typography>
                    <FormControl sx={{ width: '200px', backgroundColor: '#f0f0f0' }}>
                        <InputLabel id="page-number-label" sx={{ color: '#ff6f61' }}>Pagina</InputLabel>
                        <Select
                            labelId="page-number-label"
                            value={pageNumber}
                            onChange={handlePageChange}
                            label="Pagina"
                        >
                            {[...Array(300).keys()].map((page) => (
                                <MenuItem key={page + 1} value={page + 1}>
                                    Pagina {page + 1}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* Recenzie */}
                <Box sx={{ marginBottom: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 1, color: '#333' }}>Scrie o recenzie</Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Cum ți se pare cartea?"
                        multiline
                        rows={4}
                        value={review}
                        onChange={handleReviewChange}
                        fullWidth
                        sx={{ backgroundColor: '#f0f0f0' }}
                    />
                </Box>

                {/* Buton Salvare */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            borderRadius: '20px',
                            backgroundColor: '#ff6f61',
                            '&:hover': {
                                backgroundColor: '#e94e4b',
                            },
                        }}
                        onClick={handleSave}
                    >
                        Salvează Progresul și Recenzia
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
