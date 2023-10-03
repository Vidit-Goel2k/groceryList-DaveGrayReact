import Header from './Components/Header';
import SearchItem from './Components/searchItem';
import AddItem from './Components/AddItem';
import Content from './Components/Content';
import Footer from './Components/Footer';
import {useState} from 'react'  

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))

  const [search, setSearch] = useState("")

  const setAndSaveItems = (updatedItemList) => {
    setItems(updatedItemList)
    localStorage.setItem('shoppingList', JSON.stringify(updatedItemList))
  }

  const handleCheck = (id) => {
    const updatedItemList = items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item))
    setAndSaveItems(updatedItemList)
  }
  
  const handleDelete = (id) => {
    const updatedItemList = items.filter((item) =>  item.id !== id )
    setAndSaveItems(updatedItemList)
  }

  return (
    <div className='App'>
      <Header />
      
      <AddItem 
        search = {search}
        setSearch={setSearch}
      />

      < SearchItem 
        search={search}
        setSearch= {setSearch}
      />

      <Content 
        items= {items.filter(item => (item.itemDesc.toLowerCase()).includes(search.toLocaleLowerCase()))} 
        handleCheck= {handleCheck} 
        handleDelete= {handleDelete} 
      />
      
      <Footer length = {items.length}/>
    </div>
  )
}

export default App
