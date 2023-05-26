import styled from 'styled-components'

const HeaderElement = styled.header`
    width: 100%;
    height: 60px; 
    padding: 0 50px;
    display: flex;
    justify-content: spece-between;
    align-items: center;
    box-shadow: 1px 1px 20px rgba(0 0 0 / 5%)
`

export default function Header() {
    return (
        <HeaderElement>Header</HeaderElement>
    )
}
