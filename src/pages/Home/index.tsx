import { Content, ContentIcon, ContentLinks, Links } from './styled'

import { TbChefHat } from 'react-icons/tb'
import { GiHotMeal } from 'react-icons/gi'

export default function Home() {
  return <Content>
    <h1 className='title'>
      <span>Kitchen Display System</span>
      <span>Seleccione su rol</span>
    </h1>
    <ContentLinks>

      <Links href='/add'>
        <ContentIcon>
          <GiHotMeal />
        </ContentIcon>
        <span>Camarero</span>
      </Links>
      
      <Links href='/display'>
        <ContentIcon>
          <TbChefHat />
        </ContentIcon>
        <span>Cocinero</span>
      </Links>

    </ContentLinks>
  </Content>
}
