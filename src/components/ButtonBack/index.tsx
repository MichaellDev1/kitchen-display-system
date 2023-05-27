import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const ButtonBackElement = styled.button`
cursor: pointer;
background: none;
border: none;
font-size: 16px;
background: #f1f1f1;
padding: 8px 0;
background: #fff;
padding: 10px 15px;
font-weight: 400;
color: var(--text-color);

`
export default function ButtonBack({ path = '/' }) {
    const navigate = useNavigate()
    return (
        <ButtonBackElement onClick={() => navigate(path)}>
            <HiArrowNarrowLeft />
        </ButtonBackElement>
    )
}
