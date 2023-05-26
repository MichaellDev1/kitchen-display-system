import styled from 'styled-components'

const CardElement = styled.div`
    width: 380px;
    min-height: 400px;
    max-height: 400px;
    background: #fff;
    border-radius: 10px
`

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 47px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    background: #ED5154;
    padding: 0 10px;

    div:first-child {
        display: flex;
        gap: 10px
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        text-align: end;
    }
`
export { CardElement, CardHeader }