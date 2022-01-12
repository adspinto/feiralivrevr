import React, {FC, ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {Context, defaultValue} from "@services/globalContext";

const ContextContainer: FC = ({children}) => {
    return (
      <Context.Provider value={defaultValue}>
          {children}
      </Context.Provider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
  ) => render(ui, {wrapper: ContextContainer, ...options})


export * from '@testing-library/react-native';
export {customRender}