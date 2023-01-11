import { Container, Grid, Box, Typography, Button, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from '../images/bg.jpg'
import React from 'react';


const items = [
    {
        title: "Fast design",
        content: 'Get access to pre-designed components and icons | Create and reuse design assets and interactions to streamline your design process.'
    },
    {
        title: "Fast interaction",
        content: 'Create interactions, such as Page Link, Components Interaction and Interaction State using drag-and-drop.'
    },
    {
        title: "Front-end developer",
        content: 'Share and test clickable mobile prototypes with HTML link, demo package, etc, so that all the members and clients can view your app prototype directly.'
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

function PageFour() {
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

                    <Grid 
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{ 
                            height: 'auto',
                            marginTop: 5,
                            paddingLeft: 5
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
                                    Mockplus <span style={styles.fontColor}>Rp</span> 
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
                </Grid>
            </Container>
        </div>
    );
}

export default PageFour;