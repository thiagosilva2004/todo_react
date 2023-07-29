import * as C from './styles';
import { Item } from '../../types/item';
import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

type Props = {
    item: Item;
    onDelete: (id: number) => void; 
    onEdit: (id: number,name: string,done: boolean) => void;
}

export const ListItem = ({item, onDelete, onEdit}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);
    const [name, setName] = useState(item.name);

    function ChangeItem(){
        onEdit(item.id, name, isChecked);
    }

    function ChangeName(newName:string) {
        setName(newName);
    }

    function ChangeChecked(isDone: boolean){
        setIsChecked(isDone);
    }

    useEffect(() => {
        ChangeItem();
    },[name, isChecked])

    return(
        <C.Container done={isChecked}>
            <input 
                className='inputDone'
                type='checkbox' 
                checked={isChecked}  
                onChange={e => {ChangeChecked(e.target.checked);}}
            />
            <input               
                className='inputName'
                type='text'
                value={name}
                onChange={(e) => {setName(e.target.value)}} 
            />
            <span>< AiFillDelete onClick={() => {onDelete(item.id)}} /></span>
        </C.Container>
    );
}