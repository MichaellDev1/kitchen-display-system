import { styled } from 'styled-components'
import { TbChefHat } from 'react-icons/tb'
import { GiHotMeal } from 'react-icons/gi'

const Content = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Links = styled.a<{ bgk?: string }>`
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 210px;
  color: #363537;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 3px 3px 20px rgba(0 0 0 / 2%);
  font-size: 20px;
  background: #fff;
`

const ContentLinks = styled.div`
  display: flex;
  gap: 20px;
`

const ContentIcon = styled.span`
  font-size: 40px;
  color: var(--text-color);
`

export default function Home() {
  return <Content>
    <h1 style={{ color: 'var(--text-color)', display: 'flex', flexDirection: 'column', textAlign: 'center', marginBottom: '50px', fontSize: '25px', lineHeight: '1' }}>
      <span>Kitchen Display System</span>
      <span>Seleccione su rol</span>
    </h1>
    <ContentLinks>
      <Links href='/add'>
        <ContentIcon><GiHotMeal /></ContentIcon>
        Camarero</Links>
      <Links href='/display'>

        <ContentIcon><TbChefHat /></ContentIcon>
        <span>Cocinero</span>
      </Links>
    </ContentLinks>
  </Content>
}
