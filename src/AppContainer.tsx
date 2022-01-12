import React from 'react';
import { Text } from 'react-native';
import { Container } from "@globalComponents/Container";
import { Context, defaultValue } from "@services/globalContext";


const AppContainer = (): JSX.Element => {
  
  return (
    <Context.Provider value={defaultValue}>
      <Container testID="appContainer">
        <Text>teste react native app container</Text>
      </Container>
    </Context.Provider>
  );
};

export default AppContainer;
