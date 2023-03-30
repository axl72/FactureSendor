import React, { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyRoutes } from './routers/Routes';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import { Light, Dark } from './styles/Themes';
import Home from './pages/Home';


import styled from "styled-components"
import { ThemeProvider } from 'styled-components';

export const ThemeContext = React.createContext(null);


function App() {
  
  const [theme , setTheme] = useState("light")

  const themeStyle = theme === "light" ? Light : Dark;

  const [sitebarOpen, setSitebarOpen] = useState(false)

  return (
    <div >

      <ThemeContext.Provider  value = {{setTheme, theme}}>

        <ThemeProvider theme = {themeStyle}>
          <BrowserRouter>
            <Container className={sitebarOpen ? "sidebarState active": "" }>
              
                
                <SideBar sitebarOpen = {sitebarOpen} setSitebarOpen = {setSitebarOpen}/>
        
               
                <MyRoutes/>
              
                
            </Container>
          </BrowserRouter>
        </ThemeProvider>

      </ThemeContext.Provider>

    </div>
  );
}

const Container = styled.div`
  
  
  display: grid;
  grid-template-columns:90px auto;
  background-color:${({theme})=> theme.body};
  color: ${({theme})=>theme.text};
  &.active{
    grid-template-columns:300px auto;
  }

  
`


export default App
