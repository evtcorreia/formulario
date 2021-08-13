import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import validacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar})
{

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("")
    const validacoes = useContext(validacoesCadastro)

    const [erros, validarCampos] = useErros(validacoes)
    

    function possoEnviar()
    {
        
        for(let campo in erros)
        {
            if(!erros[campo].valido){
                return false
            }
        }
        return true
    }
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar())
            {
                aoEnviar({email, senha});   

            }
        }}
        >
            <TextField 
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)}}
                id="email" 
                label="email" 
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField 
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)}}
                onBlur={validarCampos}
                name="senha"
                error={!erros.senha.valido}
                helperText= {erros.senha.texto}
                id="senha" 
                label="senha" 
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                >Proximo
            </Button>
        </form>
    );
}

export default DadosUsuario