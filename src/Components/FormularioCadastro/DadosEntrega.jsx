import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosEntrega()
{
    return(
        <form>
            <TextField 
                id="cep"
                label="cep"
                type="text"
                variant="outlined"
                margin="normal"
        
            />

            <TextField
                id="endereco"
                label="Endereco"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
                

            />
            <TextField
                id="estado"
                label="Estado"
                type="number"
                variant="outlined"
                margin="normal"
                

            />
            <TextField
                id="cidade"
                label="Cidade"
                type="number"
                variant="outlined"
                margin="normal"
                

            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                >Finalisar Cadastro
            </Button>


        </form>
    )

}

export default DadosEntrega;