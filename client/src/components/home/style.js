import styled from 'styled-components';
import img from "../../img/img2.png";

export const Title = styled.h1`
width: fit-content;
height: fit-content;
font-size: 4vw;
padding: 70px;
font-family: Segoe UI Light, sans-serif;

`;

export const BttnContainer= styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  gap: 100px;
  align-items: center;
  justify-content: center;
  
`;

export const ElementsContainer= styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 gap: 30px;
 width: fit-content;
  
`;


export const HomeContainer= styled.div`
 height: 100%;
 background-image: url(${img});
 background-size: contain;
 background-repeat: no-repeat;
 font-family: 'Arimo', sans-serif;

 

    @media screen and (max-width: 768px){
      background: none;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;

      ${Title}{
          font-size: 6vw;
          padding: 0;
         
      }
      ${BttnContainer}{
        position: inherit;
      }
       
 
  }
    }

`;

// background: url(${img}) no-repeat center center fixed;
// background-image: url(${img});
// background-size: cover;
// font-family: "Open Sans Hebrew", "arial", "Helvetica Neue", Helvetica, serif, sans-serif;



export const LocationBttn = styled.button`
 background-color:#d14d68;
 color: white;
 border: none;
 padding: 20px 70px;
 border-radius: 5px;
 font-size: 20px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 letter-spacing: 1px;
 transition: 0.2s all;

    &:active{
      transform: scale(0.98);
    }
`;

export const AttractionsBttn = styled.button`
background-color:#9d353a;
color: white;
border: none;
padding: 20px 20px;
border-radius: 5px;
font-size: 20px;
letter-spacing: 1px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
transition: 0.2s all;

   &:active{
     transform: scale(0.98);
   }
`;

export const Lat = styled.div`
    span{
      padding-right: 40px;  
    }
`;

export const Long = styled.div`
    span{
      padding-right: 20px;  
    }
`;

export const SPAN = styled.span`
font-weight: bold;
font-size: 25px;

`;

export const ResultsContainer = styled.div`
max-width: fit-content;
font-family: 'Roboto', sans-serif;
background-color: white;
padding: 7px;
border: 1px solid #f0f0f0;
border-radius: 10px;
   
`;

