import { useState } from "react"

function App() {

  const [itemChecked, setitemChecked] = useState({
    first: false,
    second: false,
    third: false,

  })

  const handleItemChecked = (e) => {
   /* if (itemChecked[e.target.name]){
set)ItemChecked({
  ...itemChecked,
  [e.target.name]: false, 
});
    }else{
      setItemChecked
    }
  
  }*/

  setitemChecked({
    ...itemChecked,
    [e.target.name]:!itemChecked[e.target.name]
  })
  }
  return (
    <div className="container text-center"> 
    <div className="row"> 
    <div className="col text-star">
    <h1> Shopping List</h1>
    <hr />
    </div>
    <div className="col text-end">
      <button type="button" className="btn btn-outline-primary">
        <i className="bi bi-plus-circle"></i>
      </button>
    </div>
    </div>


    <div className="row">  
    <div className="col"> 
    <input 
    type="checkbox" 
    checked={itemChecked.first}
    name="first"
    onClick={(e) => handleItemChecked(e)}
    />
     </div>
    <div className="col-2 text-start "> 
    {
     // itemChecked.first && <del>1 Kg </del>
    }

   {
      //!itemChecked.first && "1 Kg "
    }
    {
      itemChecked.first ? <del>1 Kg </del> : "1 kg"
    }
      
    </div>

    <div 
    className="col-5 col-md-6 text-start" 
    style={{textDecoration: itemChecked.first && "line-through"}}
    >
       Tortillas 
    </div>
    <div className="col-4 col-md-3 btn-group btn-group-sm" role="group"> 
    <button type="button" className="btn btn-outline-primary">
      <i className="bi bi-pencil-square"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i className="bi bi-files"></i>
      </button>
    <button type="button" className="btn btn-outline-danger">
      <i className="bi bi-trash2-fill"></i>
      </button> 
      </div>
    </div>


    <div className="row">  
    <div className="col"> 
    <input type="checkbox"/>
     </div>
    <div className="col-2 text-start "> 1 Lt </div>
    <div className="col-5 col-md-6 text-start"> Aceite </div>
    <div className="col-4 col-md-3 btn-group btn-group-sm" role="group"> 
    <button type="button" className="btn btn-outline-primary">
      <i className="bi bi-pencil-square"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i className="bi bi-files"></i>
      </button>
    <button type="button" className="btn btn-outline-danger">
      <i className="bi bi-trash2-fill"></i>
      </button> 
      </div>
    </div>


    <div className="row">  
    <div className="col"> 
    <input type="checkbox"/>
     </div>
    <div className="col-2 text-start "> 3 Lt </div>
    <div className="col-5 col-md-6 text-start"> Coca Cola </div>
    <div className="col-4 col-md-3 btn-group btn-group-sm" role="group"> 
    <button type="button" className="btn btn-outline-primary">
      <i className="bi bi-pencil-square"></i>
      </button>
      <button type="button" className="btn btn-outline-primary">
      <i className="bi bi-files"></i>
      </button>
    <button type="button" className="btn btn-outline-danger">
      <i className="bi bi-trash2-fill"></i>
      </button> 
      </div>
    </div>

   </div>
  )
   
    
}

export default App
