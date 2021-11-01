import styled from 'styled-components';

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

export const Map_container = styled.div`
  width: 55%;
`;

export const Map_div = styled.div`
  width: 100%;
  height: 100%;
`;

export const MapAndAttr_container = styled.div`
    display: flex;
    flex-direction: row-reverse;
  
`;



// display: grid;
// grid-column-gap: 2.5rem;
// column-gap: 2.5rem;
// grid-template-columns: repeat(2, minmax(0, 1fr));
// grid-row-gap: 2.5rem;
// row-gap: 2.5rem;