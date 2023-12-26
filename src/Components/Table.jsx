import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Tables = ({content,theme}) =>{
    const [items,setItems] = useState(null);
    const [error, setError] = useState(null);
    const [clss,setClss] = useState(`table table-striped table-light`)

    
    
    useEffect(()=>{
        const fetch = async()=>{
            try{
                const list = await axios.get(`https://jsonplaceholder.typicode.com/${content}`);
                if(list.status!==200)
                {
                    throw new Error("Invalid")
                }
                setItems(list.data);
            }
            catch(e)
            {
                setError(e)
            }
        }
        fetch();
       
    },[content])

    useEffect(()=>{
        setClss(theme === 'light' ? 'table table-striped table-light' : 'table table-striped table-dark');
    },[theme])

    if(error!=null)
    {
        return(
            <h1>Error</h1>
            )
        }
        
        if(items==null)
        {
        
        }

    else{
    
        const obj = items[0];
    
        const keys = Object.keys(obj);

        return (
            <>
        <table class={clss}>
        <thead>
            <tr>
            {keys.map((item)=>{
                return(
                    <th scope='col'>{item}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
                        <tr key={index}>
                            {Object.keys(item).map((key, id) => (
                                <td key={id}>{JSON.stringify(item[key])}</td>
                            ))}
                        </tr>
                    ))}
        </tbody>
        </table>

        </>
      );
              }
}

export default Tables