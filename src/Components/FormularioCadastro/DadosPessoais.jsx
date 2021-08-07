import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useState } from "react";

function DadosPessoais({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);  
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});
  return(
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, novidades, promocoes})

      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}

        onBlur={(event)=>{
            const ehValido = validarCPF(cpf);
            setErros({cpf:ehValido})
          }}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          id="CPF"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        

      <FormControlLabel
        label="Promocoes"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
           
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch 
            checked =  {novidades}
            onChange={(event)=>{
                setNovidades(event.target.checked)
            }}
            name="novidades" 
            color="primary" />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
    );
}

export default DadosPessoais;
