import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import { Container } from '@mui/material';
import Image from '../images/users.svg';
import contactImage from '../images/contact.svg';
import designImage from '../images/design.svg';

function PageTwo() {
    return ( 
        <div>
            <Container
                sx={{
                    height: 'auto',
                    width: '100%',
                    pt: 15
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight='medium'
                    align='center'
                    sx={{ 
                        
                    }}
                >
                    How can we help you and your team design faster and easier?
                </Typography>

                <Grid 
                    container 
                    sx={{ 
                        pt: 8
                    }}
                >
                    <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        md={4}
                        sx={{
                            height: 400,
                            padding: 5
                        }}
                    >

                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                        <Avatar 
                            src={contactImage}
                            variant="square"
                            sx={{ 
                                width: 100,
                                height: 100,
                                justifyContent: 'center',
                                paddingTop: 3
                            }}
                        />
                        </Box>

                        <Typography
                            variant='h6'
                            fontWeight='bold'
                            align='center'
                            color='secondary'
                            sx={{ 
                                paddingTop: 4,
                            }}
                        >
                            Interactive prototyping
                        </Typography>

                        <Typography
                            variant='p'
                            fontWeight='thin'
                            align='center'
                            sx={{ 
                                paddingTop: 4,
                                justifyContent:'center'
                            }}
                        >
                            Quickly turn ideas into functional prototypes with components, icons, and interactions. 
                            Streamline design and validation process without a single line of code.
                        </Typography>
                        
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        md={4}
                        sx={{ 
                            padding: 5
                        }}
                    >

                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                        <Avatar 
                            src={Image}
                            variant="square"
                            sx={{ 
                                width: 100,
                                height: 100,
                                justifyContent: 'center',
                                paddingTop: 3
                            }}
                        />
                        </Box>

                        <Typography
                            variant='h6'
                            fontWeight='bold'
                            align='center'
                            color='secondary'
                            sx={{ 
                                paddingTop: 4,
                            }}
                        >
                            Unified collaboration
                        </Typography>

                        <Typography
                            variant='p'
                            fontWeight='thin'
                            align='center'
                            sx={{ 
                                paddingTop: 4,
                                justifyContent:'center'
                            }}
                        >
                            Create a more connected product design workflow. 
                            Bring designers, product managers, and front-end developers to work better and together.
                        </Typography>

                    </Grid>
                    <Grid 
                        item  
                        xs={12} 
                        sm={6} 
                        md={4}
                        sx={{
                            padding: 5
                        }}
                    >

                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                        <Avatar 
                            src={designImage}
                            variant="square"
                            sx={{ 
                                width: 100,
                                height: 100,
                                justifyContent: 'center',
                                paddingTop: 3
                            }}
                        />
                        </Box>

                        <Typography
                            variant='h6'
                            fontWeight='bold'
                            align='center'
                            color='secondary'
                            sx={{ 
                                paddingTop: 4,
                            }}
                        >
                            Scalable design system
                        </Typography>

                        <Typography
                            variant='p'
                            fontWeight='thin'
                            align='center'
                            sx={{ 
                                paddingTop: 4,
                                justifyContent:'center'
                            }}
                        >
                            Build available, dynamic and reusable design systems. 
                            Establish consistency and predictability across the team. 
                            Easy to manage, maintain, share and iterate.
                        </Typography>
                    </Grid>   
                </Grid>
            </Container>
        </div>
    );
}

export default PageTwo;