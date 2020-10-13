import React from 'react';
import {PrimaryButton} from '../../components/buttons/primary';
import {RoundedImage} from '../../components/image/rounded';
import {TextInput} from '../../components/inputs/text';
import {Spacer} from '../../components/spacer';

import * as S from './styles';

export const RegisterPage: React.FC = () => {
  return (
    <S.Container>
      <RoundedImage
        source={require('../../assets/animap_hero_1.jpg')}></RoundedImage>
      <Spacer height={20}></Spacer>

      <S.Headline>
        Junte-se a nós! Aproveite seu tempo {'\n'} fazendo aquilo que você
        gosta.
      </S.Headline>

      <Spacer height={60}></Spacer>

      <TextInput placeholder="Nome"></TextInput>

      <Spacer height={10}></Spacer>

      <TextInput
        placeholder="E-mail"
        keyboardType={'email-address'}></TextInput>

      <Spacer height={10}></Spacer>

      <TextInput
        placeholder="Senha"
        keyboardType={'visible-password'}></TextInput>

      <Spacer height={20}></Spacer>

      <S.Link>
        Li e concordo com os <S.UnderlinedLink>Termos de uso</S.UnderlinedLink>
      </S.Link>

      <Spacer height={20}></Spacer>

      <PrimaryButton text="Criar conta"></PrimaryButton>

      <Spacer height={5}></Spacer>

      <S.Link>
        Já possui uma conta? <S.UnderlinedLink>Entrar</S.UnderlinedLink>
      </S.Link>
    </S.Container>
  );
};
