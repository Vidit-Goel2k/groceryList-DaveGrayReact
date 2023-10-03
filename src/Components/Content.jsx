import ItemsList from "./ItemsList";
const Content = ({ items, handleCheck, handleDelete}) => {
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
