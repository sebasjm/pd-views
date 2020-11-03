// .storybook/preview.js
import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withConsole } from '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themeStyledComponents';
import GlobalStyle from './styles/globalStyles';

setConsoleOptions({
  panelExclude: []
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));


addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addDecorator(story => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </>
));
