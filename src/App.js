import './App.css';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const data = [
  {
    name: 'shorts',
    isPacked: false,
    id: uuid(),
  },
  {
    name: 'pants',
    isPacked: false,
    id: uuid(),
  },
  {
    name: 'sox',
    isPacked: false,
    id: uuid(),
  },
  {
    name: 'shirts',
    isPacked: false,
    id: uuid(),
  },
];

function App() {
  const [items, setItems] = useState(data);


  const handleItemClick = (item) => {
    item.isPacked = !item.isPacked;
    setItems([...items]);
  }

  return (
    <div className="App">
      <header>Stuffs to pack</header>
      {items.map(item => {
        return <div className={item.isPacked ? 'packedItem' : ''} onClick={() => handleItemClick(item)} key={item.id}>{item.name}</div>
      })}
    </div>
  );
}

export default App;
