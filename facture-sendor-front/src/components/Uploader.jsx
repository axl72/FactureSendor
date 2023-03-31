import React from "react";
import { useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";


export default function Uploader() {
    const hola = ""
    const [file,setFile] = useState({});
    function handleFile(e){
        console.log(file)
        setFile(e.target.files[0])
        console.log(file)
        console.log(e.target.files[0])
    }


    

    const  Drag= (e)=>{
        console.log(e)
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.add("active")
    }

    const  Drop= (e)=>{
        console.log(e)
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.remove("active")
    }

    const functionality = (e) =>{
        console.log(e)
        e.preventDefault();
        e.stopPropagation();
        setFile(e.target.files[0])
        console.log(file)
        console.log(e.target.files[0])
        e.target.classList.remove("active")
    }


    useEffect(() => {
        const $dropZone = document.getElementById("dropZone");
        $dropZone.addEventListener("dragover", Drag)
        $dropZone.addEventListener("dragleave", Drop)
        $dropZone.addEventListener("drop", functionality)
    })
    


    

    return(
        <Container id="dropZone">
            <h2>File Uploading in Ract</h2>
            
             <form>
                <input className="boton" type="file" name="file" onChange={handleFile} />
                <button>Upload</button>
            </form>  
            <p>Arrastra y suelta</p>
           
        </Container>
    );

}



const pulse = keyframes`
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;


const Container  = styled.div`
    
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: thin dashed ${(props) =>props.theme.uploader.borderInactive};
    width: 80%;
    height: 40vh;
    display; flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${(props) =>props.theme.uploader.body};

    &.active{
        border: thick dashed ${(props) =>props.theme.uploader.borderActive};;
        background-color: green;
        animation: ${pulse} 1.5s  infinite;
        animation-timing-function: linear;
    }

    .boton{
            cursor: pointer;
        user-select: none;
        margin: 0px;
        outline: 0px;
        border: 0px;
        width: auto;
        overflow: visible;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: inherit;
        background-color: transparent;
        transition: background-color 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
        font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        padding: 15px 24px;
        height: 54px;
        position: relative;
        border-radius: 4px 0px 0px 4px;
        text-transform: uppercase;
    }

`;