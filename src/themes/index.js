'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const themes = createTheme({
  palette: {
    primary: {
      light: '#ede7f6',
      main: '#673ab7',
      dark: '#5e35b1',
      200: '#b39ddb',
      800: '#4527a0',
    },
    secondary: {
      light: '#eef2f6',
      main: '#2196f3',
      dark: '#1e88e5',
      200: '#90caf9',
      800: '#1565c0',
    },
    error: {
      light: '#ef9a9a',
      main: '#f44336',
      dark: '#c62828',
    },
    orange: {
      light: '#fbe9e7',
      main: '#ffab91',
      dark: '#d84315',
    },
    warning: {
      light: '#fff8e1',
      main: '#ffe57f',
      dark: '#ffc107',
    },
    success: {
      light: '#b9f6ca',
      200: '#69f0ae',
      main: '#00e676',
      dark: '#00c853',
    },
    grey: {
      50: '#f8fafc',
      100: '#eef2f6',
      200: '#e3e8ef',
      300: '#cdd5df',
      500: '#697586',
      600: '#4b5565',
      700: '#364152',
      900: '#121926',
    },
    background: {
      default: '#f0f0f0',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
  components: {
    // MuiListItemButton: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-selected': {
    //         // backgroundColor: grey[300],
    //       },
    //     },
    //   },
    // },
    MuiLink: {
      styleOverrides: {
        root: {
          // ':hover': {
          //   color: theme.colors?.secondaryMain,
          // },
          '&.active': {
            // color: red['500'],
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root.Mui-disabled': {
            backgroundColor: '#f0f0f0',
          },
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':
            {
              borderWidth: '2px', // Increase border width for error state
            },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ':first-letter': {
            textTransform: 'capitalize',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          marginTop: '4px',
          '&.Mui-error': {
            fontWeight: 700,
          },
        },
      },
    },
    // MuiListItemButton: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-selected': {
    //         // backgroundColor: indigo['700'], // Change the selected background color here
    //         color: '#ffffff',
    //       },
    //       '&.Mui-selected:hover': {
    //         // backgroundColor: indigo['700'], // Change the selected background color here
    //         color: '#ffffff',
    //       },
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: '2px solid #5e35b1', // Customize the outline color and width
            outlineOffset: '4px',
          },
        },
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: '48px',
      padding: '16px',
      '@media (min-width: 600px)': {
        minHeight: '56px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
});

export default themes;
