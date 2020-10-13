import React from 'react';
import {SWRConfig} from 'swr';
import {PrimaryButton} from '../../components/buttons/primary';
import {RoundedImage} from '../../components/image/rounded';
import {TextInput} from '../../components/inputs/text';
import {Spacer} from '../../components/spacer';

import * as S from './styles';

export const LoginPage: React.FC = () => {
  const {data: pets} = usePets(useLoggedInUser());

  const onSubmit = () =>
    login({email, password})
      .then(() => goToPage('abc'))
      .catch(setErrors);

  return (
    <S.Container>
      <RoundedImage
        source={require('../../assets/animap_hero_1.jpg')}></RoundedImage>

      <Spacer height={20}></Spacer>

      <TextInput
        placeholder="E-mail"
        keyboardType={'email-address'}></TextInput>

      <Spacer height={10}></Spacer>

      <TextInput
        placeholder="Senha"
        keyboardType={'visible-password'}></TextInput>

      <Spacer height={5}></Spacer>

      <S.Link>Esqueci minha senha</S.Link>

      <Spacer height={30}></Spacer>

      <PrimaryButton text="Entrar"></PrimaryButton>

      <Spacer height={5}></Spacer>

      <S.Link>Criar nova conta</S.Link>

      <Spacer height={20}></Spacer>

      <S.QuotationText>
        Aqueles que mais ensinam sobre a {'\n'}humanidade nem sempre são
        humanos.
      </S.QuotationText>

      <Spacer height={10}></Spacer>

      <S.QuotationAuthor>— Donald L. Hicks</S.QuotationAuthor>
    </S.Container>
  );
};
