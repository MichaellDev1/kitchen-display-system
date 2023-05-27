import styled from 'styled-components'

const CardElement = styled.div`
    width: 300px;
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 10px 20px rgba(0 0 0 / 3%);
    justify-content: space-between;
`

const CardHeader = styled.div<{ time: number, isCancel: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    background: ${props => props.isCancel ? '#d7d7d7' : props.time > 1400 ? '#72f388' : props.time < 600 ? '#ED5154' : '#f3e372'};
    padding: 0 15px;
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

const ContentMesas = styled.div<{ time: number, isCancel: boolean }>`
background: ${props => props.isCancel ? "#b6b9b6" : props.time > 1400 ? '#5dc56f' : props.time < 600 ? '#a54345' : '#d1c35f'};
    padding: 5px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 10px;
`
export { CardElement, CardHeader, ContentMesas }