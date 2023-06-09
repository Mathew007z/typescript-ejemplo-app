import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { Sub } from './components/types';


const INITIAL_STATE = [
  {
    nick:'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'dapelu hace de moredador a veces.'
  },
  {
    nick:'sergio_serrano',
    subMonths: 4,
    avatar: 'https://i.pravatar.cc/150?u=sergio', 
  }
]

 
 interface AppState {
  subs: Sub[],
  newSubsNumber: number
 }

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])  
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
        <h2>App subs Typescript</h2>
        <List subs={subs}/>
        <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
