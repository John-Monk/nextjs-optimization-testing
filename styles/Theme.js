import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const lightTheme = {
  colors: {
    gray: 'rgba(40,40,40,1)',
    orange: 'rgba(255, 151, 0, 1)',
    white: 'white',
    black: 'black',
  },
};

const darkTheme = {
  colors: {
    gray: 'rgba(255, 151, 0, 1)',
    orange: 'rgba(40,40,40,1)',
    white: 'black',
    black: 'white',
  },
};

export default function Theme({ children }) {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme)
  }

  return <ThemeProvider changeTheme={changeTheme} theme={theme ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}
