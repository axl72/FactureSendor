import React from "react"
import styled from "styled-components";
import Uploader from "../components/Uploader";
 
import logo from "../assets/icon.svg";

const Card = ({logo, title, description})=>{
    return(
        <Tarjeta> 
            <img src={logo} alt="" />
            <div >{title}</div>
            <div className="descripcion">{ description}</div>
        </Tarjeta>
    );
}


export default function Home(){
    return(
        <Container>
                <Title>
                    <div className="title">
                        <img src={logo} alt="Logo" /> 
                        <h1>Facture Sender</h1>
                    </div>
                    <h2>Carga tu archivo XML</h2>
                </Title>
                <Uploader/>
                <Cards>
                    {
                        cards.map(({logo, title, description})=>(
                            <Card
                                logo = {logo}
                                title = {title}
                                description={description}
                            />
                        ))
                    }


                </Cards>  

        </Container>
    );
}

const cards = [
    {
        logo: logo, 
        title: "¿Cómo convertir?",
        description: "Arrastra y suelta el archivo en el convertidor de PDF online. Los archivos Word, Excel, PowerPoint y de imagen se convertirán a PDF, mientras que los archivos PDF se convertirán al tipo de archivo que tú elijas."

    },
    {
        logo: logo, 
        title: "¿Cómo convertir?",
        description: "Arrastra y suelta el archivo en el convertidor de PDF online. Los archivos Word, Excel, PowerPoint y de imagen se convertirán a PDF, mientras que los archivos PDF se convertirán al tipo de archivo que tú elijas."

    },
    {
        logo: logo, 
        title: "¿Cómo convertir?",
        description: "Arrastra y suelta el archivo en el convertidor de PDF online. Los archivos Word, Excel, PowerPoint y de imagen se convertirán a PDF, mientras que los archivos PDF se convertirán al tipo de archivo que tú elijas."

    },

    {
        logo: logo, 
        title: "¿Cómo convertir?",
        description: "Arrastra y suelta el archivo en el convertidor de PDF online. Los archivos Word, Excel, PowerPoint y de imagen se convertirán a PDF, mientras que los archivos PDF se convertirán al tipo de archivo que tú elijas."

    },
    {
        logo: logo, 
        title: "¿Cómo convertir?",
        description: "Arrastra y suelta el archivo en el convertidor de PDF online. Los archivos Word, Excel, PowerPoint y de imagen se convertirán a PDF, mientras que los archivos PDF se convertirán al tipo de archivo que tú elijas."

    },
]



const Tarjeta = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0 1.5rem;
    @media (min-width: 768px) {
    width: 30%;
    }

    @media (min-width: 576px) and (max-width: 767px){
    width: 50%;
    }

    .descripcion{
        line-height: 24px;
        font-size: 16px;
        font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
        
        text-align: justify;
        margin: 0px;
        
        
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
`



const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    h1{
        font-size: 25px;
        
    }
    
    .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
    img{
       back 
    }

`; 


const Container = styled.div`
    
    
`