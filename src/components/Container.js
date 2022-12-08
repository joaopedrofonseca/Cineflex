import styled from "styled-components"
import Accents from "./Accents"
import Films from "./Films"
import Sessions from "./Sessions"
import Success from "./Success"

export function Container(){
    return(
        <StyleContainer>
            <NavBar>CINEFLIX</NavBar>
            {/*<Films/>*/}
            {/*<Sessions/>*/}
            {/*<Accents/>*/}
            {/*<Success/>*/}
        </StyleContainer>
    )
}

const StyleContainer = styled.div`
    width: 375px;
    height: 877px;
`
const NavBar = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    color: #E8833A;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`