import apiRequest from "../apiRequest";
import ItemsList from "./ItemsList";
const Content = ({ items, setItems, API_URL, setFetchError}) => {

  const handleCheck = async (id) => {
    const updatedItemList = items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item))
    setItems(updatedItemList)

    const updateOptions ={
      method:'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({checked: updatedItemList[id-1].checked}) // used updatedItemList[id-1] as it is an array of items and the id starts from 1 whereas index starts from 0
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if(result) setFetchError(result)
  }
  
  const handleDelete = async (id) => {
    const updatedItemList = items.filter((item) =>  item.id !== id )
    setItems(updatedItemList)

    const deleteOptions ={
      method:'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if(result) setFetchError(result)
  }

  return (
    <>
      {items.length ? (
        <ItemsList 
          items= {items} 
          handleCheck= {handleCheck} 
          handleDelete= {handleDelete}
        />
        
      ) : (
        "Your list is empty"
      )}
    </>
  );
};

export default Content;
