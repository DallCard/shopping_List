import { useState } from "react"
import ListItem from "./components/ListItem";
import NewItemButton from "./components/NewItemButton";
import ClearListButton from "./components/ClearListButton";

function App() {

  const [listItems, setListItems] = useState([
    { 
    id:"1",
    name:"Arroz",
    quantity: 1,
    unit:"Kg",
    checked: false,
    },

    { 
    id:"2",
    name:"Frijol",
    quantity: 1,
    unit:"Kg",
    checked: false,
    },

    { 
    id:"3",
    name:"Leche",
    quantity: 1,
    unit:"Lt",
    checked: false,
    },

    { 
      id:"3",
      name:"Papel higienico",
      quantity: 1,
      unit:"Pz",
      checked: false,
      },
  
  ])

  const handleItemChecked = (e) => {
    const newList = listItems.map(item => {
      if(e.target.name === item.id){
        item.checked = !item.checked;
      }
      return item;
    })
    setListItems(newList);

  }
 
  return (
    <div className="container text-center"> 
    <div className="row"> 
    <div className="col text-star">
    <h1> Shopping List</h1>
    
    </div>
    <div className="col text-end mt-2">

      <ClearListButton setListItems={setListItems}
      />

      <NewItemButton
      listItems={listItems}
      setListItem={setListItems}
      />
    </div>
    </div>
<hr />
{
  listItems.map((item) => (
    <ListItem 
      id={item.id} 
      name={item.name} 
      quantity={item.quantity} 
      unit={item.unit} 
      checked={item.checked}
      handleItemChecked={handleItemChecked}
    />
  ))
}
<hr />
<div className="row"> 
      <div className="col text-end">
        <ClearListButton setListItems={setListItems} />
        <NewItemButton 
        listItems={listItems}
        setListItems={setListItems}
        />
      </div>
      </div>
   </div>
  )
}
export default App;
