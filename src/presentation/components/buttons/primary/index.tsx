import React from 'react';
import {TouchableOpacityProps, Text, TextProps} from 'react-native';
import * as S from './styles';

interface Props extends TouchableOpacityProps {
  text: string;
  textStyle?: TextProps['style'];
}

export const PrimaryButton: React.FC<Props> = ({
  children,
  text,
  textStyle,
  ...props
}) => (
  <S.TouchableOpacity {...props}>
    <S.Text style={textStyle}>{text}</S.Text>
  </S.TouchableOpacity>
);
