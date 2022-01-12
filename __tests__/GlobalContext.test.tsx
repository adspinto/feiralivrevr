import React, {FC, ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import AppContainer from '../src/AppContainer';
import {customRender} from "./utils/test-utils";


/**
 * Test default values by rendering a context consumer without a
 * matching provider
 * what to test:
 * if AppContainer has access to context
 */
test('AppContainer is Rendered with Context', () => {
    const { getByTestId } = render(<AppContainer />);

    const appContainer = getByTestId('appContainer');
    expect(appContainer.props.style.backgroundColor).toBe("blue");
})
