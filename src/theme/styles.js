import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#FFFAFB",
    },
    primary: {
      main: "#de4d55",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeight: 400,
    fontSize: 14,
    color: "#333333",
  },
  overrides: {
    MuiInput: {
      underline: {
        "&&&:before": {
          borderColor: "#de4d55",
        },
        "&&:after": {
          borderColor: "#de4d55",
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
        minWidth: "190px",
        paddingTop: "10px",
      },
      label: {
        fontSize: 16,
      },
    },
    "MuiPickersBasePicker-pickerView": {
      root: {
        margin: "0 auto",
      },
    },
    MuiTabs:{
      indicator:{
        backgroundColor: "#de4d55", 
      }
    },
  },
  weight100: 100,
  weight200: 200,
  weight300: 300,
  weight400: 400,
  weight500: 500,
  weight600: 600,
  weight700: 700,
  weight800: 800,
  weight900: 900,
  marginBottomInput: "20px",
  shadow: "1px 4px 12px rgba(0,0,0,0.05)",
  sectionRadius: "7px",
  bgWhite: "#fff",
  textDark: "#333",
});
