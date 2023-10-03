import { FaPlus } from "react-icons/fa";
import { useState } from "react";


const AddItem = ({items, setAndSaveItems}) => {

  // console.log(items)
  const [newItem, setNewItem] = useState('')

  const createItem = (item) => {
    const id =  items.length + 1
    const newListItem = {
      id: id,
      checked: false,
      itemDesc: item,
    }
    const listItem = [...items, newListItem]
    setAndSaveItems(listItem)
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
