import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Success(){
    return(
        <>
        <Title>
            Pedido feito com sucesso!
        </Title>
        <Infos>
            <h1>Filme e sessão</h1>
            <p>Enola Holmes</p>
            <p>24/06/2021 15:00</p>
        </Infos>
        <Infos>
            <h1>Ingressos</h1>
            <p>Enola Holmes</p>
            <p>24/06/2021 15:00</p>
        </Infos>
        <Infos>
            <h1>Comprador</h1>
            <p>Enola Holmes</p>
            <p>24/06/2021 15:00</p>
        </Infos>
        <Link to="/">
        <BackHome>Voltar para home</BackHome>
        </Link>
        </>
    )

}

const Title = styled.div`
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    font-weight: 700;
`
const Infos = styled.div`
    margin-top: 25px;
    padding: 0px 28px;
    h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 10px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #293845;
    }
`
const BackHome = styled.button`
    cursor: pointer;
    margin-left: 60px;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    background-color: #E8833A;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    border:none;
    margin-top: 62px;
`