import {useState, useEffect} from 'react'  
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import SearchItem from './Components/searchItem';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  const API_URL = "http://localhost:3500/items"
  
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async() => {
      try{
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Did not recieve expected data")
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
      }
      catch(err){
        setFetchError(err.message)
        setItems([])
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      setIsLoading(true)
      fetchItems()
    }, 500)
  }, [])

  return (
    <div className='App'>
      <Header />
      
      <AddItem 
        items = {items}
        setItems={setItems}
        API_URL={API_URL}
        setFetchError={setFetchError}
      />

      < SearchItem 
        search={search}
        setSearch= {setSearch}
      />
      <main>
        {isLoading ? (
          <p>Loading List Items...</p>
        ) : (
          fetchError ? (
            <p>{fetchError}</p>
          ) : (
            <Content 
              items= {search ?  (
                items.filter(item => (item.itemDesc.toLowerCase()).includes(search.toLocaleLowerCase()))
                ) : items} 
              setItems= {setItems} 
              API_URL={API_URL}
              setFetchError={setFetchError}
            />
          )
        )} 
      </main>
      <Footer length = {items.length}/>
    </div>
  )
}

export default App
