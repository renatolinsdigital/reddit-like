import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import BoxStyled from './BoxStyled';
import { defaultTheme } from 'src/theme';

describe('BoxStyled component', () => {
  test('renders colors properly and a random prop', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <BoxStyled
          borderWidth={2}
          backgroundColorName="gray2"
          borderColorName="primaryDark"
        />
      </ThemeProvider>
    );

    const boxElement = container.firstChild as HTMLElement;

    expect(boxElement).toHaveStyle({
      borderWidth: '2px',
      backgroundColor: defaultTheme.colors.gray2,
      borderColor: defaultTheme.colors.primaryDark
    });
  });
});
