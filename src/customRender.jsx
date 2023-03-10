import React from 'react';
import { render } from '@testing-library/react';
import signup from "./contexts/Signup";

const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <signup.Provider {...providerProps}>{ui}</signup.Provider>,
        renderOptions,
    );
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };