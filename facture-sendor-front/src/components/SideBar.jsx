import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import {v} from "../styles/Variables"

import { AiOutlineClockCircle,AiOutlineLeft, AiOutlineHome} from "react-icons/ai";
import { Link } from "react-router-dom";

import { ThemeContext } from "../App";
import SwitchMode from "./SwitchMode";

import Hamburger from 'hamburger-react'

import Divider from "./Divider";

export default function SideBar({sitebarOpen, setSitebarOpen}){
    
    const {setTheme, theme} = useContext(ThemeContext)

    const cambiarTheme =  () => {
        setTheme((theme) => (theme ==="light" ? "dark" : "light"))
        console.log(theme)
    };

    const ModSiderOpen =() => {
        setSitebarOpen(!sitebarOpen)
    }

    return(
        <Container >
            <div style={{display: "flex",justifyContent:"center"} }>
                <Hamburger toggled={sitebarOpen} toggle={ModSiderOpen} />

            </div>
            
{/*             <div className="Logocontent">
                <div className="imgcontent">
                    <img src={logo}/>
                </div>
            </div> */}
            {linksArray.map(({label, icon, to}) =>(
                <div className="LinkContainer" key={label}>
                    <Link to={to} className={sitebarOpen ? "Links": "Links center" }>
                    <div className="Linkicon">
                        {icon}
                    </div>
                    {sitebarOpen && (<span>{label}</span>)}
                    </Link>
                </div>
            
            ))}

            <Divider/>
            
            <div className="LinkContainer">
                    <Link to = "/" className={sitebarOpen ? "Links": "Links center" }>
                        <div className="Linkicon">
                            <AiOutlineHome/>
                        </div>
                        {sitebarOpen && (<span>Configuracion</span>)}
                    </Link>
            </div>

            <div className="LinkContainer">
                    <Link to = "/" className={sitebarOpen ? "Links": "Links center" }>
                        <div className="Linkicon">
                            <AiOutlineHome/>
                        </div>
                        {sitebarOpen && (<span>Salir</span>)}
                    </Link>
            </div>

            <Divider/>

            <SwitchMode active={sitebarOpen} theme={theme} setTheme = {setTheme} mode = {{left: "Light Mode",right: "Dark Mode",}}/>
            
        </Container>
    );
}

const linksArray =[
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to:"/home",
    },
    {
        label: "Usuarios",
        icon: <AiOutlineHome/>,
        to: "/usuarios",
    },
    {
        label: "Tables",
        icon: <AiOutlineHome/>,
        to: "/tables",
    },
 

] 




const Container = styled.div`
    background: ${(props) => props.theme.cards};
    color : ${(props) => props.theme.text};
    position: sticky;
    border-radius: 25px;
    margin: 5px;
    height: 100vh;
    .Logocontent {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom:${v.lgSpacing}
    }

    .imgcontent{
        display: flex;
        img{
            max-width: 100%;
            height: auto;
        }

    }

    .LinkContainer{
        margin: 8px 0;
        padding: 0 15%;
        :hover{
            background: ${(props) =>props.theme.cards};
        }

        span {
            color: ${(props) =>props.theme.text};
        }

        .Linkicon{
           width: 40px;
           display: flex;
           align-items: center;
           justify-content: center;
           svg{
            font-size: 30px;
            color: ${(props) =>props.theme.fondIcon};
           }
        }
        .Links{
            gap: 0.5rem;
            display: flex;
            align-items: center;
            
            text-decoration: none;
            
        }
        .center{ 
            justify-content: center;
        }
    }

    

`;