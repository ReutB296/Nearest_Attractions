import styled from 'styled-components';

export const Map_container = styled.div`
  width: 55%;
`;

export const Attractions_container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 45%;
    overflow: auto;
    max-height: 100vh;
    gap: 10px;
    background-color: #f2f2f2;
    padding: 10px;
    min-height: 100vh;
      
`;


export const Map_div = styled.div`
  width: 100%;
  height: 100%;
`;

export const MapAndAttr_container = styled.div`
    display: flex;
    flex-direction: row-reverse;

    @media screen and (max-width: 480px){
      ${Attractions_container}{
        width: 100%;
      }
    
      ${Map_container}{
          display: none;
      }
    }
  
`;

