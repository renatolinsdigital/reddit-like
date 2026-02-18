import { store } from './store/store';
import { defaultTheme } from './theme';
import { Provider } from 'react-redux';
import './global-styles/index.scss';
import { ThemeProvider } from 'styled-components';
import {
  AppContainerStyled,
  AppHeader,
  AppBody,
  AppFooter
} from './domain/components';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <AppContainerStyled>
            <AppHeader />
            <AppBody />
            <AppFooter />
          </AppContainerStyled>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
