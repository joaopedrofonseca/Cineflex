import styled from "styled-components"

export default function Sessions() {
    return (
        <>
            <Title>Selecione o horário</Title>
            <Session>
                <p>Quinta-feira - 24/06/2021</p>
                <button>15:00</button>
            </Session>
            <Footer>
                <div>
                <img src="https://br.web.img2.acsta.net/pictures/20/08/18/16/25/0872062.jpg"/>
                </div>
                <p>Enola Holmes</p>
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

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
`
const Session = styled.div`
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