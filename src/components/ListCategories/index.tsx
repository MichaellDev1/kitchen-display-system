
const categories = ['desayunos', 'entradas', 'platos', 'bebidas']

interface Props {
  handleCategorySelected: Function
}

export default function ListCategories({ handleCategorySelected }: Props) {
  return <div>
    <h3>Categorias</h3>
    <ul>
      {categories.map(category => <li key={category} onClick={() => handleCategorySelected(category)}>{category}</li>)}
    </ul>
  </div>
}
