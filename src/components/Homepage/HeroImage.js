import React from 'react';
import Image from '../images/bg.jpg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box } from '@mui/material';

const styles = {
    paperContainer: {
        height: 'auto',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
    }
};


function HeroImage() {
    return ( 
        <Paper
            style={styles.paperContainer}
            elevation={0}
        >
            <Grid
                container
                justifyContent='center'
                sx={{ 
                    height: '100%',
                }}
            >
                <Grid 
                    item 
                    xs={12} 
                    sm={10} 
                    md={8}
                    sx={{ 
                        pt: 23,
                        px: 4
                    }}
                >
                    <Typography
                        variant='h3'
                        align="center"
                        fontWeight="bold"
                        sx={{ 
                            pb:2,
                            color: '#fff'
                        }}
                    >
                        Design Faster. Collaborate Better
                    </Typography>
                    <Typography
                        variant='h6'
                        align="center"
                        fontWeight="bold"
                        color="secondary"
                        sx={{ 
                            pb:1,
                            color: '#fff'
                        }}
                    >
                        The most robust all-in-one product design platform for prototyping, collaboration, and design Systems
                    </Typography>
                    <Typography
                        variant='h6'
                        align="center"
                        fontWeight="medium"
                        color="secondary"
                        sx={{ 
                            pb:4,
                            color: '#fff'
                        }}
                    >
                        Save ONE hour a day
                    </Typography>
                    <Box 
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ 
                            py: 5
                        }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ 
                                py:2 
                            }}
                        >
                            Get started for free
                        </Button>
                        <Button
                            startIcon={<PlayCircleIcon />}
                            variant="text"
                            color="secondary"
                            sx={{ 
                                py:2 
                            }}
                        >
                            Watch Video
                        </Button>
                    </Box>
                    
                </Grid>
            </Grid>
        </Paper>
    );
}

export default HeroImage;