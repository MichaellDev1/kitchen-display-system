import { styled } from 'styled-components'
const Content = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Links = styled.a`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  background: red;
`

const ContentLinks = styled.div`
  display: flex;
  gap: 10px;
`

export default function Home() {
  return <Content>
    <h1 style={{ color: 'black', display: 'flex', flexDirection: 'column', textAlign: 'center', marginBottom: '50px' }}>
      <span>Kitchen Display System</span>
      <span>Seleccione su rol</span>
    </h1>
    <ContentLinks>
      <Links href='/add'>Camarero</Links>
      <Links href='/display'>Cocinero</Links>
    </ContentLinks>
  </Content>
}
