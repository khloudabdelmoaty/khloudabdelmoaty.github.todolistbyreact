import React , {Component} from 'react';
import "./Todo.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Todo =(props) =>
{
    const {items , d} = props;
    const length = items.length;
    const listitems = items.map(item =>{
        if (length === length)
        {
            return(
            
                <div key={item.id} id="header">
                    
                <span>{item.name}</span>
    
                <span>{item.price}</span>
                
                    <span onClick={()=>{d(item.id)}}><FontAwesomeIcon id="i" icon="trash" /></span>
                    
                </div>
   
            
        )
        }else
        {
           
        }
        
       
    })
    
    return (
        <div>
            <div className="list" >
                
                <span>name</span>
                <span>price</span>
                <span>action</span>
                
                
            
                
            </div>
            {listitems}
        </div>
    )
}
export default Todo;