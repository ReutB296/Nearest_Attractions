import React, { useContext,  useEffect,  useState } from "react";
import { AttrTypeContext } from '../../Context/Attr_typeContext.js';
import { UserPositionContext } from '../../Context/UserPositionContext.js';
import { AttractionsContext } from '../../Context/AttractionsContext.js';
import { FilterContainer,
         Filter_form,
         Filter_label,
         Filter_select,
         Filter_option,
         BackDiv
} from './style.js';
import {
    Link
} from "react-router-dom";


export default function AttrTypesFilter() {

const { Attr_Type } = useContext(AttrTypeContext);
const { findAttr } = useContext(AttractionsContext);
const { location } = useContext(UserPositionContext);
const [value, setValue] = useState('');

const handleClick = (e) => {
    setValue(e.target.value);
}
 

useEffect(() =>{
    if(value !== ""){
    findAttr(location, value);
    }
},[value]);



return (
    <>
    { Array.isArray(Attr_Type) && Attr_Type.length > 0 
        ?
        <FilterContainer>
            <Filter_form>
                    <Filter_label>בחר סוג אטרקציה</Filter_label>
                    <Filter_select onChange={handleClick} value={value}>
                        <Filter_option value="all">כל האטרקציות</Filter_option>
                        {Attr_Type.map(({_id:typeValue}) => (
                        <Filter_option key={typeValue} value={typeValue} >
                        {typeValue}
                        </Filter_option>
                        ))}
                    </Filter_select>
            </Filter_form>
            <Link to={"/"}>
                    <BackDiv>חזור</BackDiv>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#919191" role="presentation"><path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path></svg>
            </Link>
        </FilterContainer>
        :
        ""
    }
    </>
 );
}

