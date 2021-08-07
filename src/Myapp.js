import React , {Component} from 'react';
import Mynada from "./Components/Mynada"

import Todo from "./Components/Todo"

import Add from "./Components/Add"

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab  } from '@fortawesome/free-brands-svg-icons'
import { faSearch , faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTrash)

class Myapp extends Component
{
  state={
    
    items :[
 
   
    ]
      
  }

  delete =(id)=>{
    console.log(id)
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }
 
  additem =(item)=>{
    
  let items = this.state.items;
  items.push(item);
  this.setState({items})
  }

  
    
  render(){
    return(

    
      <div className="container">
       <h1>to-do-list</h1>
       <Add additem={this.additem}/>
         <Todo  items={this.state.items} d={this.delete}/>
       
      </div>
    )
  }
}
export default Myapp;