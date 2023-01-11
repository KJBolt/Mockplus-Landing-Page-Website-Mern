import { Container, Grid, Box, Typography, Button, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from '../images/website.jpg'
import React from 'react';


const items = [
    {
        title: "Product manager",
        content: 'Write, share and update PRD | Add interactions and logic to transform prototypes | Manage design tasks.'
    },
    {
        title: "Designer",
        content: 'Upload designs from Sketch / PS / XD / Figma / Axure / Mockplus RP | Collaborate online - share and comment design decisions.'
    },
    {
        title: "Front-end developer",
        content: 'Get product requirements, specs, assets, interactions flows and CSS code snippets without a hitch.'
    },
]

const styles = {
    paperContainer: {
        height: 400,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
    },
    fontColor: {
        color: 'secondary'
    }

};

function PageThree() {
    return ( 
        <div>
            <Container
                sx={{ 
                    height: 'auto'
                }}
            >
                <Grid container>

                    <Grid 
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{ 
                            height: 'auto',
                            marginTop: 5,
                        }}
                    >
                        <Box
                            sx={{ 
                                p: 2
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="p"
                                    fontWeight='thin'
                                    color='success'
                                >
                                    Effective collaboration to save precious time
                                </Typography>
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                >
                                    Mockplus <span style={styles.fontColor}>Cloud</span> 
                                </Typography>
                            </Box>

                            {items.map(item => (
                                <Box key={item.title}>
                                <Typography
                                    align='left'
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{ 
                                        pt:3
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant='p'
                                    fontWeight="thin"
                                >
                                    {item.content}
                                </Typography>
                            </Box>
                            ))}

                            <Button
                                variant='text'
                                color='secondary'
                                endIcon={<ArrowForwardIcon/>}  
                                size='large'
                                sx={{ 
                                    my:4
                                }}
                            >
                                Learn More
                            </Button> 
                        </Box>
                    </Grid>

                    <Grid 
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{ 
                            marginTop: 6,
                        }}
                    >
                        <Paper
                            style={styles.paperContainer}
                            sx={{ 
                                height: 'auto'
                            }}
                        >
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default PageThree;