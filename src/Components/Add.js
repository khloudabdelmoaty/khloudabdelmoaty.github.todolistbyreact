import React , {Component} from 'react';
import "./Add.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Add extends Component {
    state={
        name:"", 
        price:"",
    }

    show = (e) =>{
      this.setState(
       { [ e.target.id]: e.target.value}
      )
    }

    add = (e) =>{
        e.preventDefault();
        this.props.additem(this.state)
        this.setState({
            name:"",
            price:""
        })
      }
    render(){
        return(
<div>
    <form onSubmit={this.add}>
        <input type="text" id="name" placeholder="enter your name" onChange={this.show} value={this.state.name}/>
        <input type="text" id="price" placeholder="enter your pricee" onChange={this.show} value={this.state.price}/>
        <input type="submit"  value="add" id="add"/>
    </form>
</div>
           
        )
    }
}
export default Add;