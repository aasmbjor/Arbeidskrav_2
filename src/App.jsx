import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShoppingList from './components/ShoppingList'
import AddForm from './components/AddForm'
import './App.css'

function App() {
  const groceryItems = [
    {
      id: 0,
      title: "Melk",
      quantity: "2"
    }
    {
      id: 1,
      title: "Egg",
      quantity: "1"
    }
  ]

  const [groceryList, setGroceryList] = useState(groceryItems)

  const [shoppingItem, setShoppingItem] = useState()

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForms ShoppingItem={ShoppingItem} setShoppingItem={setShoppingItem} />
      <ShoppingList groceryItems={setGroceryList}/>
    <main/>
  )
}

export default App
