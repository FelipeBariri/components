import { Box, FormControlLabel, TextField, Checkbox, Button, Typography, Grid, Container } from '@mui/material';
import React from 'react';

function Formulario() {
  return (
    <>
    <Container component="main" maxWidth="xs" >
        <Box 
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography component="h2" variant="h5">
                Formulário de Login
            </Typography>

            <Box component="form" sx={{mt:1}}>
                <TextField fullWidth margin="normal"label="Email" nome="email" variant="filled"/>
                <TextField fullWidth margin="normal"label="Senha" type="password" variant="filled"/>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Lembrar-me"
                />
                <Button fullWidth type="submit"variant="contained" sx={{mt:4,mb:2}}>Login</Button>
                <Grid container>
                    <Grid item xs>
                        <a href="" >cadastre-se</a>
                    </Grid>
                    <Grid item>
                        <a href="" >Esqueci minha senha</a>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>    
    </>
  )
}

export default Formulario;