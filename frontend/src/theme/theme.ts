import { Theme, PaletteMode, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: 'dark' as PaletteMode,
        background: {
          default: 'rgb(0, 0, 0)',
          paper: 'rgb(15, 15, 15)',
        },
        text: {
          primary: 'rgb(255, 255, 255)',
          secondary: 'rgb(207, 207, 207)',
        },
        primary: {
          main: 'rgb(129, 187, 89)',
          contrastText: 'rgb(100, 101, 98)',
        },
        divider: 'rgba(145, 158, 171, 0.24)',
      },
      typography: {
        fontFamily: '"Poppins", sans-serif',
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 600,
              borderRadius: 0,
              paddingTop: 10,
              paddingBottom: 10,
            },
          } as ComponentsOverrides['MuiButton'],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
            input: {
              borderRadius: 0,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
    }),
  );

export default getTheme;