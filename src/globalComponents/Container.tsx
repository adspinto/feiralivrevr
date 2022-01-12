import React, { useContext } from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import { Context } from "@services/globalContext";

type ContainerProps = {
  safe?: boolean;
  testID: string;
};

export const Container: React.FC<ContainerProps> = (props) => {
  const { colors, metrics } = useContext(Context);
  const Wrapper = props.safe ? SafeAreaView : View;
  return (
    <Wrapper style={{ backgroundColor: colors.blue }} testID={props.testID}>
        {props.children}
    </Wrapper>
  );
};

Container.defaultProps = {
  safe: true,
}