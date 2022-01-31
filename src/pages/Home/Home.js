import React from 'react'
import CardList from '../../components/CardList/Card-List.component';
import Search from '../../components/Search/Search.component';
import './Home.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: '' // as the monsters cannot be updated everytime searched a 
                            //duplicate string is created
        }
    }
componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())//respose.json converts raw data (string)into javascripta object notation
            .then(users => this.setState({ monsters: users }));//monster array is updated with users
    }

    handleSearch=(event)=>{
         this.setState({searchField:event.target.value})//updates the searchField with event.target.value(input given in serach bar)
    }
   
    render()
    {
        const {monsters,searchField } = this.state
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        //includes compares the data from api(eg monster name) and the data that is given as input(searchfield)
        return(
            <>
            <div className='App'>
                <h1>Monster Rolodex</h1>

                <Search handleSearch={this.handleSearch} />
                <CardList monsters={filteredMonsters} />
            </div>
            
            </>//when this.handlesearch is used it specifies that it can be used among other components
            
        
        ) }}

export default Home