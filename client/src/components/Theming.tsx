import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import {ruRU} from '@mui/material/locale';

import AppRouter from './AppRouter';

type SupportedLocales = keyof typeof locales;

export default function Theming() {
  const [locale, setLocale] = React.useState<SupportedLocales>('ruRU');

  const theme: any = createTheme(
    {
      palette: {
        mode: 'dark',
      },
    },
    ruRU,
  );

  return (
    <Box sx={{ width: '100%' }}>
      <ThemeProvider
        // theme={(theme) => createTheme(theme, locales[locale])}
        theme={(theme)}
      >
        <Box sx={{height: "100vh"}}>
          <AppRouter/>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
