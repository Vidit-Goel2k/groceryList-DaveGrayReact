import ItemsList from "./ItemsList";
const Content = ({ items, setItems}) => {
  const handleCheck = (id) => {
    const updatedItemList = items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item))
    setItems(updatedItemList)
  }
  
  const handleDelete = (id) => {
    const updatedItemList = items.filter((item) =>  item.id !== id )
    setItems(updatedItemList)
  }
  return (
    <main>
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
    </main>
  );
};

export default Content;
