import React from "react";
import CardList from "../Components/CardList";
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll'
import './App.css';


class App extends React.Component{
    constructor(){
        super();
        this.state= {
            robots: [],
            searchfield: "",
            btn: 0,
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=> response.json())
            .then(users=> this.setState({robots: users}));
    }

    onSearchChange= (event)=>{
        this.setState({searchfield: event.target.value})
    }

    
    render () {
        const {robots, searchfield, btn}= this.state;
        console.log(btn);
        const filterRobots= robots.filter(robot => {
            return robot.name.substring(0, searchfield.length).toLowerCase().includes(searchfield.toLowerCase())
        });


        return (
            <div className="tc courier white">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots= { filterRobots } />
                </Scroll>
            </div>
        );
    }
   
};

export default App