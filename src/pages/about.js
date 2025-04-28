import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#34495e' }}>Informații Suplimentare</Typography>
                <Typography variant="body1" sx={{ marginTop: '20px', color: '#2e3b55' }}>
                    Pe platforma noastră **Lecturium**, poți alege între două pachete de abonament care îți oferă acces la o varietate largă de cărți, de la cele clasice la cele mai recente lansări.
                </Typography>

                <Box sx={{ marginTop: '40px' }}>
                    <Typography variant="h5" sx={{ color: '#ff6f61' }}>1. Abonament de Tip Pachet:</Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#2e3b55' }}>
                        - **Pachetul 1:** Acces la 10 cărți pentru 50 RON. Acest pachet este ideal pentru cei care doresc să încerce platforma și să exploreze câteva titluri din colecția noastră.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#2e3b55' }}>
                        - **Pachetul 2:** Acces nelimitat la toate cărțile pentru 90 RON. Acesta este ideal pentru cititorii frecvenți care doresc să aibă acces continuu la întreaga bibliotecă.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '40px' }}>
                    <Typography variant="h5" sx={{ color: '#ff6f61' }}>Beneficii suplimentare:</Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#2e3b55' }}>
                        - **Acces nelimitat la actualizările de cărți**: Abonații la Pachetul 2 vor avea acces imediat la toate titlurile noi care vor fi adăugate pe platformă.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#2e3b55' }}>
                        - **Recomandări personalizate**: Pe măsură ce citești, platforma va învăța ce tip de cărți îți plac și îți va recomanda titluri pe care s-ar putea să le apreciezi.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#2e3b55' }}>
                        - **Cărți audio disponibile**: Pe lângă cărțile electronice, oferim și opțiunea de a asculta cărți audio în timp ce călătoriți sau sunteți într-o pauză.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '40px' }}>
                    <Typography variant="h5" sx={{ color: '#ff6f61' }}>Cum funcționează abonamentele?</Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#2e3b55' }}>
                        După ce te înscrii pe platforma noastră, poți alege abonamentul dorit. Plata se poate face direct online, iar accesul va fi activ imediat ce plata este confirmată.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', color: '#2e3b55' }}>
                        Poți modifica abonamentul oricând, în funcție de nevoile tale de lectură.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default About;
