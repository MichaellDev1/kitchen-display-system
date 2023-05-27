import { Container, ContentCategory, ListCategoryList } from './styled'

const categories = ['desayunos', 'cena', 'postre', 'bebidas']

interface Props {
  handleCategorySelected: Function
}

export default function ListCategories({ handleCategorySelected }: Props) {
  return <Container>
    <ContentCategory>
      {categories.map(category =>
        <ListCategoryList
          key={category} onClick={() => handleCategorySelected(category)}>
          {category}
        </ListCategoryList>)}
    </ContentCategory>
  </Container>
}
