import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import apiRequest from "../apiRequest";


const AddItem = ({items, setItems, API_URL, setFetchError}) => {

  // console.log(items)
  const [newItem, setNewItem] = useState('')

  const createItem = async(item) => {
    const id =  items.length + 1
    const newListItem = {
      id: id,
      checked:false,
      itemDesc: item
    }
    const listItems = [...items, newListItem]
    setItems(listItems)

    const postOptions = {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createItem(newItem)
    setNewItem("")
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        required
        placeholder="Add Item"
        value={newItem}
        onChange={(e)=>{setNewItem(e.target.value)}}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
