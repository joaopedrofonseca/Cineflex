import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Seats from "../components/Seats"

export default function Accents({chair, setChair, movie, setMovie, selectedSeats, date, setDate, setSelectedSeats, name, setName, cpf, setCpf}) {
    const [numberSeats, setNumberSeats] = useState(0)
    const params = useParams()
    const navigate = useNavigate()
    const selectedSeatsID = selectedSeats.map((element) => element.id)


    function purchase(event){
        event.preventDefault();
        if(numberSeats > 0){
            const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
                ids: selectedSeatsID,
                name: name,
                cpf: cpf
            })
            request.then(() => navigate("/sucesso"))   
        }
        if(numberSeats === 0){
            alert("Escolha o(s) assento(s) por favor")
        }
    }

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSessao}/seats`)
            .then((res) => {
                setChair(res.data)
                setMovie(res.data.movie)
                setDate(res.data.day)
            }    
            )
            .catch((err) => console.log(err.response.data))
    }, [])


    if (chair === []) {
        return (
            console.log('aguardando...')
        )
    }
    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>
            <ContainerSeats>
                {(chair.seats)?.map((e,index) => <Seats
                numberSeats={numberSeats}
                setNumberSeats={setNumberSeats}
                selectedSeats={selectedSeats} 
                setSelectedSeats={setSelectedSeats} 
                index={index} 
                chair={chair} 
                key={index}/>)}
            </ContainerSeats>
            <ExampleSeats>
                <div>
                    <EggSeats color="#1AAE9E" borderColor="#0E7D71"></EggSeats>
                    <p>Selecionado</p>
                </div>
                <div>
                    <EggSeats color="#C3CFD9" borderColor="#7B8B99"></EggSeats>
                    <p>Dispon??vel</p>
                </div>
                <div>
                    <EggSeats color="#FBE192" borderColor="#F7C52B"></EggSeats>
                    <p>Indispon??vel</p>
                </div>
            </ExampleSeats>
            <Buyer>
                <form onSubmit={purchase}>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." type="text" data-test="client-name" value={name} onChange={e => setName(e.target.value)} required ></input>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." type="number" value={cpf} data-test="client-cpf" onChange={e => setCpf(e.target.value)} required></input>
                <button type="submit" data-test="book-seat-btn">Reservar assento(s)</button>
                </form>
            </Buyer>
            <Footer data-test="footer">
                <div>
                    <img src={movie.posterURL}/>
                </div>
                <footer>
                    <p>{movie.title}</p>
                    <p>{date.weekday} - {chair.name}</p>
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
const EggSeats = styled.button`
    width: 26px;
    height: 26px;
    background: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 12px;
    margin-right: 5px;
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