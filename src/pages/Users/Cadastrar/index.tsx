import React from 'react';

import Content from '../../../components/Layout/Content';
import Wrapper from '../../../components/Layout/Wrapper';
import BackButton from '../../../components/BackButton';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { 
  Form, 
  FormGroup, 
  Grid} from './styles';

const NewUser: React.FC = () => {
  return (
    <Content>
      <Wrapper>
        <>
          <BackButton link="/users"/>
          <Title text="Novo paciente" />

          <Form>
            <Grid>
              <FormGroup gridArea='NM'>
                <Input 
                  type="text"
                  label="Nome"
                  identifier="nome"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='NC'>
                <Input 
                  type="text"
                  label="Data e nascimento" 
                  identifier="dtNascimento"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='CP'>
                <Input 
                  type="text"
                  label="CPF"
                  identifier="CPF"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='SU'>
                <Input 
                  type="text"
                  label="nSUS"
                  identifier="nSUS"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='FN'>
                <Input 
                  type="text"
                  label="Telefone"
                  identifier="telefone"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='CD'>
                <Input 
                  type="text"
                  label="Cidade"
                  identifier="cidade"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='BR'>
                <Input 
                  type="text"
                  label="Bairro"
                  identifier="bairro"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='NU'>
                <Input 
                  type="text"
                  label="Número"
                  identifier="numero"
                  value=''
                  disabled={false}/>
              </FormGroup>
              <FormGroup gridArea='CO'>
                <Input 
                  type="text"
                  label="Complemento"
                  identifier="complemento"
                  value=''
                  disabled={false}/>
              </FormGroup>
            </Grid>

            <Button text="Salvar"/>
          </Form>
        </>
      </Wrapper>
    </Content>
  );
}

export default NewUser;