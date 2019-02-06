import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'

const HomePage = ()=>{
    return(<h1>HOME PAGE</h1>)
}

class App extends Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className='container'>
                        <Header/>
                        <Route path="/" exact component={HomePage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
