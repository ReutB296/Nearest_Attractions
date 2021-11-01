import styled from 'styled-components';

export const FilterContainer= styled.div`
    padding: 32px 24px;
    border: 1px solid #eee;
    background-color: #fcfcfc;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    max-width: 100vw;
    align-items: center;

        & a{
            display:flex;
            text-decoration: none;
            color: black;
            gap: 5px;
        }


    @media screen and (max-width: 319px){
        flex-direction: column;
        gap: 10px;
    }
`;

export const Filter_form = styled.form
`
`;

export const Filter_label = styled.label`
    padding-left: 30px;
    font-weight: bold;
    color: #d14d68;
`;


export const Filter_select = styled.select`
    padding: 5px;
    width: 100%;
`;

export const Filter_option = styled.option
`
`;

export const BackDiv = styled.div`
    padding-top: 3px;
`;


