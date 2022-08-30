import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [items, addItem] = useState([])
  const [itemText, addSymbol] = useState('')
  const itemsList = items.map( (item, index) => <MyItem key={index} text = {item.text} />)
  const addInList = () => {
    const newItem = { id: Date.now, text: itemText}
    addItem([...items, newItem])
    addSymbol('')
    
  }
  return (
    <div className="App">
      <div className='shopList'>
        <input type={'text'} placeholder='add an item...' value={itemText} onChange={e => addSymbol(e.target.value)}></input>
        <button onClick={() => addInList()} className='addButton'>+</button>
      
      {itemsList}
      </div>
    </div>
  );
}
const MyItem = (props) =>{
  const [isPurchased, setPurchased] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const reduce = ()=>{
    if (quantity>1){
      setQuantity(quantity-1)
    }
    else setQuantity(1)
  }
  const setPur = () =>{
    if(isPurchased)
      setPurchased(false)
      else setPurchased(true)
  }
  return (
    <div className='item'>
      <input type={'checkbox'} value={isPurchased} onClick={()=>setPur()}></input>
      <p className={isPurchased ? 'isPurchased' : "isNotPurchased"}>{props.text}</p>
      <div className='quantity'>
        <button onClick={() => reduce()}>-</button>
        <p >{quantity}</p>
        <button onClick={() => setQuantity(quantity+1)}>+</button>
      </div>
    </div>
  )
}

export default App;
