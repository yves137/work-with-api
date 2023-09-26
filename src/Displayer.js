import { useState } from 'react'
import {CustomButtons} from './CustomButtons'
import { CardList } from './CardList';

export function Displayer(){
   
    const[data,setData]= useState([]);
    const [firstRendered,setFirstRendered]=useState(true)

    function handleClick(){
        fetch('https://random-data-api.com/api/users/random_user?size=10')
        .then(data=>data.json())
        .then(data=>{
            setData(data);
        })
    }
    
    function handleFirstREnder(){
        fetch('https://random-data-api.com/api/users/random_user?size=10')
        .then(data=>data.json())
        .then(data=>{
            setFirstRendered(false)
            setData(data);
        })
    }
   
   return <div className='flex flex-col items-center space-y-5'>
            <CustomButtons handleClick={handleClick} />
            <CardList isFirst={firstRendered} handleFirstREnder={handleFirstREnder} data={data}/>
        </div>
}