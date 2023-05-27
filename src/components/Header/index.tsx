import { ContentTime, HeaderElement } from './styled'
import { BiTimeFive } from 'react-icons/bi'
import useTime from '../../hooks/useTime'


export default function Header() {
    //Custom hook para obtener el tiempo en tiempo real
    const { time } = useTime()

    return (
        <HeaderElement>
            <ContentTime>
                <p><BiTimeFive /></p>
                <span>{time.toLocaleTimeString()}</span>
            </ContentTime>
        </HeaderElement>
    )
}
