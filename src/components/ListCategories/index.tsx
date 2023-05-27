import { styled } from "styled-components"

const categories = ['desayunos', 'entradas', 'platos', 'bebidas']

interface Props {
  handleCategorySelected: Function
}

const ListCategoryList = styled.li`
  font-size: 20px;
  font-weight: 400;
  color: #bbbbbb;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none; 
`

const ContentCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin-top: 10px;
`


export default function ListCategories({ handleCategorySelected }: Props) {
  return <div style={{ minHeight: '340px', maxHeight: '340px', overflowY: 'scroll' }}>
    <ContentCategory>
      {categories.map(category => <ListCategoryList key={category} onClick={() => handleCategorySelected(category)}>{category}</ListCategoryList>)}
    </ContentCategory>
  </div>
}
