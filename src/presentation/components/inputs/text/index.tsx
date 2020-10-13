import React from 'react';
import * as S from './styles';

import {TextInputProps} from 'react-native';

export const TextInput: React.FC<TextInputProps> = ({children, ...props}) => (
  <S.Input {...props}>{children}</S.Input>
);
