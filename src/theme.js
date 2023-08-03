import { createTheme } from '@mui/material/styles';
export let theme = createTheme({});
theme = createTheme({
  typography: {
    PublicSans: [
      'Public Sans',
      'sans-serrif'
    ].join(','),
    Poppins: [
      'Poppins',
      'sans-serrif'
    ].join(','),
    MazzardH: [
      'MazzardH',
      'sans-serrif'
    ].join(','),
    h1: {
    //  83px
      [theme.breakpoints.down("xl")]: {
        fontSize:"3.783rem !important",
        lineHeight: "4.56rem !important",
      },  
      // [theme.breakpoints.down("lg")]: {
      //   fontSize: "3rem !important",
      //   lineHeight: "3.75rem !important",
      // },  
      [theme.breakpoints.down("lg")]: {
        fontSize: "3.25rem !important",
        lineHeight: "3.75rem !important",
      },
      [theme.breakpoints.down("620")]: {
        fontSize: "2.5rem !important",
        lineHeight: "3rem !important",
      },
      [theme.breakpoints.down("500")]: {
        fontSize: "2.25rem !important",
        lineHeight: "2.5rem !important",
      },
      [theme.breakpoints.down("425")]: {
        fontSize: "1.5rem !important",
        lineHeight: "2rem !important",
      },
    },
    h2: {
      // fs:50.4
      [theme.breakpoints.down("xl")]: {
        fontSize: "2.875rem !important",
        lineHeight: "3.5rem !important",
      },  
      [theme.breakpoints.down("lg")]: {
        fontSize: "2.15rem !important",
        lineHeight: "2.62rem !important",
      },  
      [theme.breakpoints.down("md")]: {
        fontSize: "1.75rem !important",
        lineHeight: "2.125rem !important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem !important",
        lineHeight: "2rem !important",
      },
      [theme.breakpoints.down("450")]: {
        fontSize: "1.25rem !important",
        lineHeight: "1.75rem !important",
      },
    },
    h3: {
      // fs:38.4
      [theme.breakpoints.down("xl")]: {
        fontSize: "2.188rem !important",
        lineHeight: "2.65rem !important",
      },  
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.641rem !important",
        lineHeight: "2rem !important",
      },  
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "2.75rem !important",
      //   lineHeight: "3rem !important",
      // },
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: "2.25rem !important",
      //   lineHeight: "2.5rem !important",
      // },
      // [theme.breakpoints.down("450")]: {
      //   fontSize: "2rem !important",
      //   lineHeight: "2.5rem !important",
      // },
    },
    h4: {
      // fs:42
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.813rem !important",
        lineHeight: "2.5rem !important",
      },  
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.375rem !important",
        lineHeight: "1.875rem !important",
      },  
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "2.75rem !important",
      //   lineHeight: "3rem !important",
      // },
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: "2.25rem !important",
      //   lineHeight: "2.5rem !important",
      // },
      // [theme.breakpoints.down("450")]: {
      //   fontSize: "2rem !important",
      //   lineHeight: "2.5rem !important",
      // },
    },
    h5: {
      // fs:32
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.5rem !important",
        lineHeight: "1.25rem !important",
      },  
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.125rem !important",
        lineHeight: "0.938rem !important",
      },  
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "2.75rem !important",
      //   lineHeight: "3rem !important",
      // },
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: "2.25rem !important",
      //   lineHeight: "2.5rem !important",
      // },
      // [theme.breakpoints.down("450")]: {
      //   fontSize: "2rem !important",
      //   lineHeight: "2.5rem !important",
      // },
    },
    'body1':{
        [theme.breakpoints.down("xl")]: {
        fontSize: "0.906rem !important",
        lineHeight: "1.823rem !important",
      },
        [theme.breakpoints.down("lg")]: {
        fontSize: "0.688rem !important",
        lineHeight: "1.375rem !important",
      },
      [theme.breakpoints.down("500")]: {
        fontSize: "1.25rem !important",
        lineHeight: "2rem !important",
      },
    },
    'body2':{
      [theme.breakpoints.down("xl")]: {
      fontSize: "0.906rem !important",
      fontWeight: "700 !important",
      lineHeight: "1.375rem !important",
    },
      [theme.breakpoints.down("lg")]: {
      fontSize: "0.688rem !important",
      fontWeight: "700 !important",
      lineHeight: "1.025rem !important",
    },
    [theme.breakpoints.down("500")]: {
      fontSize: "0.325rem !important",
      fontWeight: "700 !important",
      lineHeight: "0.5rem !important",
    },
  },
  },
  palette: {
    primary: {
      // main: "#ff0753", //pink
      main: "#E81C00",
      light: "#ffffff"
    },
    secondary: {
      main: "#06d6a0",
      dark: "#767b91"
    },
    info: {
      main: "#0f0b82",
    },
    submit: {
      main: "#0f0b82",
    },
    dark: "#100082",
    headingDark: "#141737",
    black: "#343434",
    greyDark: "#2b3043",
    greyLight: "#464C63",
    blueDark: "#0f0b82",
    blue2:"#292F75",
    aquaBlue:"#00B2FF",
    red:"#E81C00",
    pink:"#ff0753",
    sectionBg:"#F7F8F8",

  },
 
});

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        padding:0,
        maxWidthXl: {
          // [theme.breakpoints.up("sm")]: {
          //   maxWidth: 600, // Your custom value here
          // },  
          [theme.breakpoints.up("md")]: {
            maxWidth: 1000, // Your custom value here
          },  
          [theme.breakpoints.up("lg")]: {
            maxWidth: 1200, // Your custom value here
          },  
          [theme.breakpoints.up("1560")]: {
            maxWidth: 1400, // Your custom value here
          },  
        },
        
       
      },
    },
    
  },
});