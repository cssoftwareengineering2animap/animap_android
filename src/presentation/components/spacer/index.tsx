import React from 'react';
import {View} from 'react-native';

type Props =
  | {
      width: number;
      height?: number;
    }
  | {
      width?: number;
      height: number;
    };

export const Spacer: React.FC<Props> = ({width, height}) => (
  <View style={{width, height}}></View>
);
