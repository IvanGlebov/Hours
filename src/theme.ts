import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0074a6"
    }
  },
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {

        }
      }
    }
  }
})

export default theme;
