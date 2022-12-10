import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function Films() {
    const [movies, setMovies] = useState(undefined)
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then((res) => setMovies(res.data))
        promise.catch((err) => console.log(err.response.data))
    }, [])

    if (movies === undefined) {
        return (
            console.log('aguardando...')
        )
    }

    return (
        <>
            <Title>Selecione o filme</Title>
            <Catalog>
                {movies.map((movie) => (
                    <Link key={movie.title} to={`/sessoes/${movie.id}`}>
                        <Film id={movie.id}>
                            <img src={movie.posterURL} />
                        </Film>
                    </Link>
                ))}
            </Catalog>
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
const Catalog = styled.div`
    height: 100%;
    width: 320px;
    margin: 0px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Film = styled.div`
    cursor: pointer;
    width: 145px;
    height: 209px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    img{
        width: 129px;
        height: 193px;
    }
`