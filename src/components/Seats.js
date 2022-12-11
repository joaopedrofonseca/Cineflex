import { useState } from "react"
import styled from "styled-components"

export default function Seats({index, chair }) {
    const seat = chair.seats
    console.log(seat)

    function unavailableChair() {
        alert("Esse assento não está disponível")
    }

    function chooseSeat(){
    }


    return (
        <StyleSeats available={seat[index].isAvailable} 
        onClick={(!seat[index].isAvailable ? unavailableChair : chooseSeat)}
        >{seat[index].name}</StyleSeats>
    )
}

const StyleSeats = styled.button`
    cursor: pointer;
    width: 26px;
    height: 26px;
    background: ${props => ((props.available === true) ? '#C3CFD9' : '#FBE192')};
    border: 1px solid ${props => ((props.available === true) ? '#7B8B99' : '#F7C52B')};
    border-radius: 12px;
    margin-right: 5px;
`