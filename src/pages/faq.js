import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const FAQ = () => {
    return (
        <Container>
            <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#34495e' }}>Întrebări Frecvente</Typography>

                <Box sx={{ marginTop: '30px' }}>
                    <Typography variant="h6" sx={{ color: '#ff6f61' }}>Cum mă pot abona la Lecturium?</Typography>
                    <Typography variant="body1" sx={{ color: '#2e3b55' }}>
                        Te poți abona direct pe pagina de înregistrare. Alege pachetul dorit și completează procesul de înregistrare. Plata poate fi efectuată rapid prin card bancar.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="h6" sx={{ color: '#ff6f61' }}>Cum pot accesa cărțile?</Typography>
                    <Typography variant="body1" sx={{ color: '#2e3b55' }}>
                        După ce te abonezi, accesezi platforma și vei găsi toate cărțile disponibile în biblioteca ta personală. Poți citi cărțile direct în aplicație sau le poți descărca pe dispozitivul tău.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="h6" sx={{ color: '#ff6f61' }}>Ce fac dacă uit parola?</Typography>
                    <Typography variant="body1" sx={{ color: '#2e3b55' }}>
                        Dacă uiți parola, poți să o resetezi accesând opțiunea „Am uitat parola” de pe pagina de logare. Îți vom trimite un link pentru resetare prin email.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="h6" sx={{ color: '#ff6f61' }}>Există o perioadă de probă?</Typography>
                    <Typography variant="body1" sx={{ color: '#2e3b55' }}>
                        În prezent, nu oferim o perioadă de probă, dar poți alege să te abonezi pentru o lună și să îți anulezi abonamentul oricând, dacă nu ești mulțumit.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="h6" sx={{ color: '#ff6f61' }}>Ce tipuri de cărți sunt disponibile?</Typography>
                    <Typography variant="body1" sx={{ color: '#2e3b55' }}>
                        Pe platforma noastră vei găsi o varietate de cărți, inclusiv beletristică, știință, biografii, dezvoltare personală și multe altele. Cărțile sunt disponibile în formate electronice și audio.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="h6" sx={{ color: '#ff6f61' }}>Cum îmi pot anula abonamentul?</Typography>
                    <Typography variant="body1" sx={{ color: '#2e3b55' }}>
                        Poți să îți anulezi abonamentul oricând din secțiunea „Contul meu” de pe platformă. După anulare, îți vei păstra accesul până la sfârșitul perioadei pentru care ai plătit.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default FAQ;
