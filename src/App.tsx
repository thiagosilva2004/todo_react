import { useState, useEffect } from 'react';

import * as C from './App.styles';

import { Item } from './types/item';

import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { ClearItems } from './components/ClearItems';


const App = () => {

  const [list, setList] = useState<Item[]>([]);
  const [currentId, setCurrentId] = useState(0);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    setCurrentId(state => state + 1);

    newList.push({
      id: currentId + 1,
      name: taskName,
      done: false,
    });

    localStorage.setItem("items",JSON.stringify(newList));

    setList(newList);
  }

  useEffect(() => {
    var jsonItems:string|null = localStorage.getItem("items");

    if(jsonItems === null || jsonItems === ''){
      return;
    }

    var items:any = JSON.parse(String(jsonItems));

    setList(items);

    if (items.length < 1){
      return;
    }

    var ultimoItem = items[items.length - 1];
    setCurrentId(ultimoItem.id); 
  }, []);

  const handleClear = () => {
    localStorage.clear();
    setList([]);
    setCurrentId(0);
  }

  const handleEdit = (id: number, name: string, done: boolean) => {
    const newList = list.filter(list => list.id !== id);
    setCurrentId(state => state + 1);
    newList.push({
      id: currentId + 1,
      name: name,
      done: done,
    });

    localStorage.setItem("items",JSON.stringify(newList));

    setList(newList);
  }

  const handleDelete = (id: number) => {
    const newList = list.filter(list => list.id !== id);

    localStorage.setItem("items",JSON.stringify(newList));
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <C.containerAddClear>
          <AddArea onEnter={handleAddTask} />
          <ClearItems onClear={handleClear} />    
        </C.containerAddClear>


        {list.map((item,index) => (
          <ListItem key={index} item={item} onDelete={handleDelete} onEdit={handleEdit} />
        ))}

        

      </C.Area>
    </C.Container>
  );
}

export default App;