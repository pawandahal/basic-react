import React, { Component } from 'react'

 class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
   
  }
  //rerender the components
  //so using lifeCycle 
 componentDidMount(){

   //write whatever 
   //only happend once 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>this.setState(
      //another promise
      ()=>{
        return{monsters:users};
  
      },
      ()=>{
        console.log(this.state)
      }
    ))
    
   //another promise
    }
  onSearchChange=(event)=>{
    const searchField=event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField}
    })
  }

  render() {
    const {monsters,searchField}=this.state;
    //destructuing to make code short
    const {onSearchChange}=this
    const filteredMonsters=monsters.filter((monster)=>{
      return  monster.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className="App">
         <input className="search-box"
         type="search"
         placeholder='search monsters'
         onChange={onSearchChange}/>
        {filteredMonsters.map((monster)=>{
          return(
            <div key={monster.id}>
            <h1>{monster.name}</h1>
             <h2>{monster.email}</h2>
           </div>
          )
        })}
      </div>
    )
  }
}

export default App