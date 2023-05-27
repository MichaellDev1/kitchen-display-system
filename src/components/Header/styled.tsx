import { styled } from "styled-components"

const HeaderElement = styled.header`
    width: 100%;
    height: 60px; 
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 20px rgba(0 0 0 / 2%);
    background: #fff;
`

const ContentTime = styled.div`
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 7px;
    color: var(--text-color);
    font-weight: 500;
    font-size: 17px;
    p { 
        font-size: 20px 
    }
`

export { ContentTime, HeaderElement }