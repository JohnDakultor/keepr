
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Note from "./pages/Note";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import { useState } from "react";



const themeLight = createTheme({
  palette: {
    primary: {
      main: "#0C0C0C",
      contrastText: "#FFF455",
    },
    secondary: {
      main: "#FFF455",
      contrastText: "#0C0C0C",
    },
    background: {
      default: "#e4f0e2",
      paper: "#FFF455",
    },
  },

  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});



const themeDark = createTheme({
  palette: {
    primary: {
      main: "#0C0C0C",
      contrastText: "#FFF455",
    },
    secondary: {
      main: "#FFF455",
      contrastText: "#0C0C0C",
    },
    background: {
      default: "#222222",
      paper: "#0C0C0C",
    },
   
  }
});





function App() {
  const [light, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={light ? themeDark : themeLight}>
      <BrowserRouter>
        <Layout toggleTheme={toggleTheme} light={light}>
          <Routes>
            <Route  path="/create" element={<Create />} />
            <Route index  element={<Note />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;