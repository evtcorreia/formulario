import React, {Component, Fragment} from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

import {validarCPF, validarSenha} from "./models/cadastro"
import validacoesCadastro from './contexts/validacoesCadastro';

class App extends Component {
  render(){

    return(
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1"align="center">Formulario de cadastro</Typography>
        <validacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
          
          <FormularioCadastro aoEnviar = {aoEnviarForm} />

        </validacoesCadastro.Provider>

      </Container>
      
    );


  } 
}


function aoEnviarForm(dados)
{
  console.log(dados);
}



export default App;
