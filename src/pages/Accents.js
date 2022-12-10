import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Accents() {
    const [chair, setChair] = useState([])
    const params = useParams()
    console.log(chair)

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSessao}/seats`)
            .then((res) => setChair(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])

    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>
            <ContainerSeats>
                {(chair.seats)?.map((s) => (
                    <Seats>{s.name}</Seats>
                ))}
            </ContainerSeats>
            <ExampleSeats>
                <div>
                    <Seats color="#1AAE9E" borderColor="#0E7D71"></Seats>
                    <p>Selecionado</p>
                </div>
                <div>
                    <Seats color="#C3CFD9" borderColor="#7B8B99"></Seats>
                    <p>Disponível</p>
                </div>
                <div>
                    <Seats color="#FBE192" borderColor="#F7C52B"></Seats>
                    <p>Indisponível</p>
                </div>
            </ExampleSeats>
            <Buyer>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."></input>
                <button>Reservar assento(s)</button>
            </Buyer>
            <Footer>
                <div>
                    <img src={chair.movie.posterURL} />
                </div>
                <footer>
                    <p>{chair.movie.title}</p>
                    <p>{chair.day.weekday} - {chair.name}</p>
                </footer>
            </Footer>
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
    color: #293845;
`
const ContainerSeats = styled.div`
    width: 100%;
    height: 203px;
    padding: 0px 24px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`
const Seats = styled.button`
    width: 26px;
    height: 26px;
    background: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 12px;
    margin-right: 5px;
`
const ExampleSeats = styled.div`
    height: 53px;
    padding: 0px 40px;
    display: flex;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Buyer = styled.div`
    width: 100%;
    padding: 0px 24px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        margin-top: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    input{
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        &::placeholder{
            font-style: italic;
            color: #AFAFAF;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
        }
    }
    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        font-style: normal;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        border: none;
        margin: 57px;
        cursor: pointer;
    }
`
const Footer = styled.div`
    position: fixed;
    bottom: 0px;
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    display: flex;
    align-items: center;
    div{
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    p{
        font-size: 26px;
        line-height: 30px;
        color:#293845;
        margin-left: 14px;
    }
`