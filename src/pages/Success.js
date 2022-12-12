import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Success({chair, movie, date, name, cpf, selectedSeats}){
    return(
        <>
        <Title>
            Pedido feito com sucesso!
        </Title>
        <Infos data-test="movie-info">
            <h1>Filme e sessão</h1>
            <p>{movie.title}</p>
            <p>{date.weekday} - {chair.name}</p>
        </Infos>
        <Infos data-test="seats-info">
            <h1>Ingressos</h1>
            {selectedSeats.map((element) => (
                <p>Assento {element.name}</p>
            ))}
        </Infos>
        <Infos data-test="client-info">
            <h1>Comprador</h1>
            <p>Nome: {name}</p>
            <p>CPF: {cpf && cpf[0]}{cpf && cpf[1]}{cpf && cpf[2]}.
                {cpf && cpf[3]}{cpf && cpf[4]}{cpf && cpf[5]}.
                {cpf && cpf[6]}{cpf && cpf[7]}{cpf && cpf[8]}-
                {cpf && cpf[9]}{cpf && cpf[10]}</p>
        </Infos>
        <Link data-test="go-home-btn" to="/">
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