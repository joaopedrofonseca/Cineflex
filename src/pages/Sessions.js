import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function Sessions() {
    const [sessions, setSessions] = useState([])
    const params = useParams()
    console.log(sessions)

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idFilme}/showtimes`)
            .then((res) => setSessions(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])

    if (sessions === []) {
        return (
            console.log('aguardando...')
        )
    }

    return (
        <>
            <Container>
                <Title>Selecione o horário</Title>
                {(sessions.days)?.map((s) => (
                    <StyleSession data-test="movie-day">
                        <p>{s.weekday} - {s.date}</p>
                        {(s.showtimes)?.map((hour) => (
                            <Link to={`/assentos/${hour.id}`}>
                                <button data-test="showtime">{hour.name}</button>
                            </Link>
                        ))}
                    </StyleSession>
                ))}
            </Container>
            <Footer data-test="footer">
                <div>
                    <img src={sessions.posterURL} />
                </div>
                <p>{sessions.title}</p>
            </Footer>
        </>
    )
}
const Container = styled.div`
    padding-bottom: 100px;
`
const Title = styled.div`
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
`
const StyleSession = styled.div`
    height: 35px;
    margin-left: 24px;
    margin-bottom: 88px;
    p{
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
        margin-bottom: 22px;
    }
    button{
        cursor: pointer;
        background: #E8833A;
        width: 82px;
        height: 43px;
        margin-right: 8px;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
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