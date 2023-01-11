import React from 'react';
import { Container, Grid, Typography, Box, Card } from '@mui/material';
import Avatar from '@mui/material/Avatar'

const items = [
    {
        image: require('../images/pastor2.png'),
        name: 'John bolt',
        position: 'Software Developer',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit quam at doloremque mollitia sint aliquam qui eveniet maiores neque ad ratione quasi veritatis dignissimos laudantium numquam iste, debitis atque excepturi voluptatem fuga? Quas velit harum, optio ipsum iure et aliquid rerum, quisquam ut est minus dolore odit sit? Similique?'
    },

    {
        image: require('../images/pastor3.jpg'),
        name: 'Kenneth Rockson',
        position: 'Ux Designer',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit quam at doloremque mollitia sint aliquam qui eveniet maiores neque ad ratione quasi veritatis dignissimos laudantium numquam iste, debitis atque excepturi voluptatem fuga? Quas velit harum, optio ipsum iure et aliquid rerum, quisquam ut est minus dolore odit sit? Similique?'
    },

    {
        image: require('../images/pastor1.jpg'),
        name: 'Ill Park',
        position: 'Content Manager',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit quam at doloremque mollitia sint aliquam qui eveniet maiores neque ad ratione quasi veritatis dignissimos laudantium numquam iste, debitis atque excepturi voluptatem fuga? Quas velit harum, optio ipsum iure et aliquid rerum, quisquam ut est minus dolore odit sit? Similique?'
    },
]

function PageFive() {
    return ( 
        <div>
            <Container
                maxWidth="xl"
                sx={{
                    bgcolor: '#f2f2f2',
                    py:8,
                    height: 'auto'
                }}
            >

                <Typography
                    fontWeight="medium"
                    variant="h4"
                    align='center'
                    sx={{ 
                        pt: 10
                    }}
                >
                    Trusted by 2,000,000+ users and 200,000+ teams
                </Typography>
                

                <Grid 
                    container
                    sx={{ 
                        mb:5
                    }}
                >
                    {items.map(item => (
                    <Grid
                        key={item.name}
                        item
                        md={4}
                        sm={6}
                        xs={12}
                        sx={{
                            height: 'auto',
                            px: 1,
                            pt: 10,
                            my: 3,
                        }}
                    >
                        <Card
                            sx={{ 
                                p: 2,
                                height: 'auto'
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ 
                                    pt: 3
                                }}
                            >
                                <Avatar 
                                    src={item.image}
                                />    
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ 
                                    pt: 2
                                }}
                            >
                                <Typography
                                    variant="p"
                                    fontWeight="thin"
                                >
                                    {item.name}
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ 
                                    pt: 1
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    align='center'
                                    color="secondary"
                                >
                                    {item.position}
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ 
                                    pt: 5
                                }}
                            >
                                <Typography
                                    variant="p"
                                >
                                    {item.details}
                                </Typography>
                            </Box>
                        </Card>
                        
                        
                    </Grid>
                    ))}
                    
                </Grid>

            </Container>
        </div>
    );
}

export default PageFive;