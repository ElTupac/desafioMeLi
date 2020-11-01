import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Item from './Item';
import Search from './Search';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      'newUrl': ''
    };
  }

  componentDidMount(){
    document.getElementById('searchForm').addEventListener('submit', e => {
      e.preventDefault();

      let search = document.getElementById('searchInput').value;
      search = search.replace(' ', '%20');
      const url = `/items?search=${search}`;

      this.setState({'newUrl': `${url}`});
    });
  }

  render(){
    if(this.state.newUrl){
      const url = this.state.newUrl;
      this.setState({'newUrl': ''});
      return <Redirect to={url} />
    }

    return(
      <Switch>
        <Route exact path="/items" component={Search}/>
        <Route path="/items/:id" component={Item}/>
      </Switch>
    );
  }
}

export default App;
