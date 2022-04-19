import { createContext, useCallback, useContext,  useState, useEffect } from 'react';

import { mockCategories } from '../mocks'
import { api } from '../services'

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [isCategoryLoaded, setIsCategoryLoaded] = useState(false)

    const getCategories = useCallback(async () => {
        // await api.get(`/categories).then(response => {
        //     console.log(response.data.content)
        //     setCategories(response.data.content)
        // setIsCategoryLoaded(true)
        // })
        setCategories(mockCategories) // Tirar após integracao
        setIsCategoryLoaded(true)
      }, [])

      const getCategory = (id) => {
        const selectedCategory = categories.find(category => category.id === id)
        return selectedCategory ?? {}
      }
    
      useEffect(() => {
        getCategories()
      }, [getCategories])

    const value = {categories, setCategories, getCategory, isCategoryLoaded }

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}

export const useCategory = () => {
    const context = useContext(CategoryContext)

    if (!context) throw new Error('A CategoryProvider should be provided')

    return context
}