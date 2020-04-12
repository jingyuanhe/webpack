import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Home from './home.js'
import { BrowserRouter, Route} from "react-router-dom";
class App extends React.Component{
    render(){
        return <BrowserRouter>
            <Route path='/' component={Home} exact></Route>
            <Route path='/list' component={List}></Route>
        </BrowserRouter>
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );