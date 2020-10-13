import React from 'react';
import {ImageProps} from 'react-native';
import * as S from './styles';

export const RoundedImage: React.FC<ImageProps> = ({children, ...props}) => (
  <S.Image {...props}>{children}</S.Image>
);
