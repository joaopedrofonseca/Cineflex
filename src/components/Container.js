import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Accents from "../pages/Accents"
import Films from "../pages/Films"
import Sessions from "../pages/Sessions"
import Success from "../pages/Success"

export function Container() {
    const [selectedSeats, setSelectedSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [chair, setChair] = useState([])
    const [movie, setMovie] = useState([])
    const [date, setDate] = useState([])


    return (
        <BrowserRouter>
            <StyleContainer>
                <NavBar>CINEFLIX</NavBar>
                <Routes>
                    <Route path="/" element={<Films />}></Route>
                    <Route path="/sessoes/:idFilme" element={<Sessions />}></Route>
                    <Route path="/assentos/:idSessao" element={<Accents chair={chair} setChair={setChair} movie={movie} setMovie={setMovie} date={date} setDate={setDate} name={name} setName={setName} cpf={cpf} setCpf={setCpf} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>}></Route>
                    <Route path="/sucesso" element={<Success name={name} cpf={cpf} chair={chair} movie={movie} date={date}/>}></Route>
                </Routes>
            </StyleContainer>
        </BrowserRouter>
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