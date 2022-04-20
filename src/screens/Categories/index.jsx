
import { useEffect, useCallback, useState } from 'react'

import { CategoriesHeader, CategoryListItem } from '../../components'
import './style.scss'
import { api } from '../../services'

const mockCategories = [
  {
    "id": 5,
    "nome": "Arquitetura de Software",
    "image": "https://atmdigital.com.br/wp-content/uploads/2018/02/atm-digital-saiba-o-que-e-arquitetura-de-software-e-qual-a-sua-importancia-770x515.png"
  },
  {
    "id": 2,
    "nome": "Design",
    "image": "http://atenaeducacional.com.br/wp-content/uploads/2019/09/designthinkingatena.png"
  },
  {
    "id": 3,
    "nome": "Lógica de Programação",
    "image": "https://www.brasilcode.com.br/wp-content/uploads/2020/09/Logica-de-programacao-1024x427.png"
  },
  {
    "id": 1,
    "nome": "Metodologias Ágeis",
    "image": "https://www.quickin.io/wp-content/uploads/2021/02/19833-scaled.jpg"
  },
  {
    "id": 4,
    "nome": "Padrões de Projeto",
    "image": "https://refactoring.guru/images/patterns/languages/java.png?id=bcef5252e2f796924d3cf430bc25f5d5"
  }
]

export function Categories() {
  const [categories, setCategories] = useState(mockCategories)

  const getCategories = useCallback(async () => {
    // await api.get('/categories').then(response => console.log(response.data.content))
  }, [])

  useEffect(() => {
    getCategories()
  }, [getCategories])

    return (
      <div className="categories-container">
        <CategoriesHeader categoryName="Categorias" />
        <div className="categories-container__item-list">
          {categories.map(category => (
            <CategoryListItem
              key={category.id}
              image={category.image} 
              categoryName={category.nome}
              id={category.id}
            />
          ))}
        </div>
      </div>
    )
  }