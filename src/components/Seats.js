import { useState } from "react"
import styled from "styled-components"

export default function Seats({ index, chair, selectedSeats, setSelectedSeats, numberSeats, setNumberSeats}) {
    const seat = chair.seats
    const [clicked, setClicked] = useState(false)


    function unavailableChair() {
        alert("Esse assento não está disponível")
    }

    function chooseSeat(s) {
        if (!clicked){
            setClicked(true)
            let growSeat = numberSeats + 1;
            setNumberSeats(growSeat)
            setSelectedSeats([...selectedSeats, s])
        } else{
            setClicked(false)
            const filteredSeats = selectedSeats.filter((element) => (element !== s))
            setSelectedSeats([...filteredSeats])
            let lessSeat = numberSeats - 1;
            setNumberSeats(lessSeat)

        }
    }

    return (
        <StyleSeats
            data-test="seat"
            available={seat[index].isAvailable}
            clicked={clicked}
            onClick={(!seat[index].isAvailable ? unavailableChair : () => chooseSeat(seat[index]))}
        >{seat[index].name}</StyleSeats>
    )
}

const StyleSeats = styled.button`
    cursor: pointer;
    width: 26px;
    height: 26px;
    background: ${props => ((props.available === true) ? '#C3CFD9' : '#FBE192')};
    background: ${props => (props.clicked && '#1AAE9E')};
    border: 1px solid ${props => ((props.available === true) ? '#7B8B99' : '#F7C52B')};
    border: ${props => (props.clicked && '1px solid #0E7D71')};
    border-radius: 12px;
    margin-right: 5px;
`