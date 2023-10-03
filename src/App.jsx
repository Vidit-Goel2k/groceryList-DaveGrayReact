import {useState, useEffect} from 'react'  
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import SearchItem from './Components/searchItem';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || [])

  const [search, setSearch] = useState("")

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items))
  }, [items])

  return (
    <div className='App'>
      <Header />
      
      <AddItem 
        items = {items}
        setItems={setItems}
      />

      < SearchItem 
        search={search}
        setSearch= {setSearch}
      />

      <Content 
        items= {search ?  (
          items.filter(item => (item.itemDesc.toLowerCase()).includes(search.toLocaleLowerCase()))
          ) : items} 
        setItems= {setItems} 
      />
      
      <Footer length = {items.length}/>
    </div>
  )
}

export default App
