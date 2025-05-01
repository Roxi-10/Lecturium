import React from 'react';
import { Box, Button, Typography, Card, CardContent, Grid } from '@mui/material';
import Link from 'next/link';
import '@fontsource/playfair-display';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '30px',
};

const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#ff6f61',
    fontFamily: '"Playfair Display", serif',
    textAlign: 'center',
    marginTop: '30px',
};

const primaryButtonStyle = {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '6px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#34495e',
    },
};

const Home = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffefd5' }}>
            <Box sx={{ flex: 1, padding: '20px' }}>
                {/* Header */}
                <Box sx={headerStyle}>
                    <Typography sx={titleStyle}>Lecturium</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="/dashboard" passHref>
                            <Button sx={primaryButtonStyle}>Dashboard</Button>
                        </Link>
                        <Link href="/forms/login" passHref>
                            <Button sx={{ ...primaryButtonStyle, marginLeft: '8px' }}>Login</Button>
                        </Link>
                        <Link href="/forms/sign-up" passHref>
                            <Button sx={{ ...primaryButtonStyle, marginLeft: '8px' }}>Sign Up</Button>
                        </Link>
                    </Box>
                </Box>

                {/* Slogan */}
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
                    Lecturium - Descoperă magia cititului!
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#555', marginTop: '5px' }}>
                    Începe călătoria ta prin lumi fascinante de cărți.
                </Typography>

                {/* Carduri principale */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '40px',
                        gap: '20px',
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        {
                            title: 'Vezi Prețuri',
                            text: 'Descoperă pachetele de prețuri și ce îți oferă fiecare.',
                            link: '/subscriptions',
                            icon: <PriceCheckIcon />,
                        },
                        {
                            title: 'Despre Lecturium',
                            text: 'Află mai multe despre Lecturium și misiunea noastră.',
                            link: '/about',
                            icon: <InfoIcon />,
                        },
                        {
                            title: 'Întrebări Frecvente',
                            text: 'Răspunsuri la întrebările frecvente pe care le ai despre Lecturium.',
                            link: '/faq',
                            icon: <HelpOutlineIcon />,
                        },
                    ].map((item, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: '260px',
                                padding: '20px',
                                borderRadius: '16px',
                                backgroundColor: '#fffdf8',
                                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2c3e50' }}>
                                    {item.icon}
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>{item.text}</Typography>
                                <Link href={item.link} passHref>
                                    <Button sx={{ ...primaryButtonStyle, marginTop: '10px' }} fullWidth>
                                        {item.title}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                {/* Secțiune: Cărți recomandate */}
                <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '50px', color: '#2c3e50' }}>
                    Cărți Recomandate
                </Typography>
                <Grid container spacing={3} justifyContent="center" sx={{ marginTop: '20px' }}>
                    {[
                        {
                            image: '/images/glasul-padurii-bkz-bg1.webp',
                            title: 'Glasul Pădurii',
                            description: 'Un tânăr călător ajunge într-o pădure misterioasă, unde descoperă adevăruri ascunse despre natură. Gen: Fantasy',
                            price: '35 RON',
                            link: '/books/glasul-padurii',
                        },
                        {
                            image: '/images/27727462-1.jpg',
                            title: 'Umbra Dragonului',
                            description: 'Într-o lume medievală, un tânăr trebuie să înfrunte o amenințare malefică. Gen: Fantasy, Aventură',
                            price: '45 RON',
                            link: '/books/umbra-dragonului',
                        },
                        {
                            image: '/images/9786066096133-1854482.jpg',
                            title: 'Hoțul de Cărți',
                            description: 'O poveste despre supraviețuire și dragostea pentru lectură în timpul celui de-al Doilea Război Mondial. Gen: Istoric, Drama',
                            price: '40 RON',
                            link: '/books/hotul-de-carti',
                        },
                        {
                            image: '/images/gambitul-damei-bg1.webp',
                            title: 'Gambitul Damei',
                            description: 'O poveste despre o tânără care devine campioană mondială la șah, în ciuda provocărilor din viața sa. Gen: Drama, Sport',
                            price: '50 RON',
                            link: '/books/gambitul-damei',
                        },
                        {
                            image: '/images/36643474-1.jpg',
                            title: 'Mândrie și Prejudecată',
                            description: 'O poveste clasică despre iubire și prejudecăți în societatea engleză. Gen: Romantic, Clasic',
                            price: '42 RON',
                            link: '/books/mandrie-si-prejudecata',
                        }
                    ].map((book, index) => (
                        <Grid item key={index}>
                            <Card sx={{ width: 250, backgroundColor: '#fffdf8', borderRadius: '16px', boxShadow: 3 }}>
                                <CardContent>
                                    {/* Imaginea redimensionată */}
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        style={{
                                            width: '100%',
                                            height: '200px',  // Imagini mai mici pentru a se potrivi în carduri
                                            objectFit: 'contain',  // Menține raportul de aspect
                                            borderRadius: '8px',
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ marginTop: '10px' }}>{book.title}</Typography>
                                    <Typography variant="body2" sx={{ marginTop: '5px', color: '#555' }}>{book.description}</Typography>
                                    <Typography variant="subtitle2" sx={{ marginTop: '10px', fontWeight: 'bold', color: '#ff6f61' }}>
                                        {book.price}
                                    </Typography>
                                    <Link href={book.link} passHref>
                                        <Button sx={{ ...primaryButtonStyle, marginTop: '10px' }} fullWidth>
                                            Citește mai mult
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Footer */}
                <Box
                    component="footer"
                    sx={{
                        textAlign: 'center',
                        padding: '20px 10px',
                        fontSize: '14px',
                        color: '#777',
                        borderTop: '1px solid #eee',
                        backgroundColor: '#fffaf0',
                        marginTop: '40px',
                    }}
                >
                    <Typography>Contact: contact@lecturium.ro | Telefon: 0800-123-456</Typography>
                    <Typography> Echipa Galbenă - MetaMinds</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
