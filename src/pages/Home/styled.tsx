import { styled } from "styled-components"

const Content = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title { 
    color: var(--text-color); 
    display: flex;
    flex-direction: column;
    text-align: center; margin-bottom: 50px;
    font-size: 22px;
    font-weight: 600;
    line-height: 29px; 
}
.name-app {
  font-size: 28px;
}
.rol {
  font-weight: 300;
}
`

const Links = styled.a<{ bgk?: string }>`
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 210px;
  color: #363537;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 3px 3px 20px rgba(0 0 0 / 2%);
  font-size: 19px;
  background: #fff;
  &:hover {
    transition: box-shadow .2s;
    box-shadow: 3px 3px 25px rgba(0 0 0 / 10%);
  }
`

const ContentLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const ContentIcon = styled.span`
  font-size: 40px;
  color: #81aedd;
`
export { Content, ContentIcon, ContentLinks, Links }