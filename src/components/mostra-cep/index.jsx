import React, {useEffect, useState} from 'react'
import { DivPrincipal, DivInput, Titulo, DivBotao,DivResutado,Item, Input, Botao } from '../styles';
import axios from 'axios';






const buscaCep = () => {
    const [valor, setValor] = useState ('');
const [cep, setCep] = useState({});
const [erro, setErro] = useState(false);



const handleChange = (e) => {
  setValor(e.target.value);
  
};

const handleSubmit = (e) => {
  e.preventDefault()
  axios
  .get(`https://cdn.apicep.com/file/apicep/${valor}.json`) // Usa o valor digitado no input
  .then((res)=> {
    setCep(res.data);// Atualiza o estado "cep" com os daos do cep encontrado
    setErro(false) // Define que não houve erro na busca
  })
  .catch(() => {
    setErro (alert("Digite corretamente seu CEP"))// Define ue houve erro na busca
  });
  setValor(''); //Limpa o valor digitado
}




  



  return (
    <DivPrincipal>
        <Titulo>CONSULTE SEU CEP</Titulo>
        <form onSubmit={handleSubmit}>
        <DivInput>
        <Input
value={valor}
onChange={handleChange}
        
        type="text"
        placeholder='ex. 00000-000' />
        </DivInput> 
        <DivBotao>
        <Botao type='submit'>Enviar</Botao>
        </DivBotao>
        </form>
        

        <DivResutado>
            <Item>
            <p>{cep.address}</p>
            <p>{cep.city}</p>
            <p>{cep.district}</p>
            <p>{cep.code}</p>
            <p>{cep.state}</p>


              



                

            </Item>
        </DivResutado>


    </DivPrincipal>
  )
}

export default buscaCep