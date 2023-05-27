import styled from 'styled-components'
import { BiTimeFive } from 'react-icons/bi'
import { useEffect, useState } from 'react'

const HeaderElement = styled.header`
    width: 100%;
    height: 60px; 
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
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
`

export default function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <HeaderElement>

            <div></div>
            <ContentTime>
                <span style={{ fontSize: '20px' }}><BiTimeFive /></span>
                <span>{time.toLocaleTimeString()}</span>
            </ContentTime>
            <div>

            </div>

        </HeaderElement>
    )
}
