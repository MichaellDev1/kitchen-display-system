import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { ButtonDeselect, Title } from '../../pages/Add/styled'
import ListProducts from '../ListProducts'
import ListCategories from '../ListCategories'
import { ContentSectionCategory } from './styled'

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string | null>>
  categorySelected: string | null
  handleProductSelected: Function
  handleSelected: Function
}

export default function SectionCategoryProducts({ setSelected, categorySelected, handleProductSelected, handleSelected }: Props) {
  return <ContentSectionCategory >
  
    {categorySelected
      ? <div>
        <div style={{ minHeight: '25px' }}>
          <ButtonDeselect onClick={() => setSelected(null)}><HiArrowNarrowLeft /></ButtonDeselect>
        </div>
        <Title>Productos:</Title>
        <ListProducts categorySelected={categorySelected} handleProductSelected={handleProductSelected} />
      </div>
      : <div>
        <div style={{ minHeight: '25px' }}></div>
        <Title>Categorias:</Title>
        <ListCategories handleCategorySelected={handleSelected} /></div>}

  </ContentSectionCategory>
}
