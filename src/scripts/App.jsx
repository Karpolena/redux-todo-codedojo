import React, {Component} from 'react';
import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';




function App({ store }) {
  
    // nextId() {
    //     // this._nextId = this._next || 4;
    //      this._nextId = JSON.stringify(Math.random() * (100000 - 100) + 100);
    //     return this._nextId++;
    // }

        return(
            <main className="main">
                <HeaderContainer store={store} />

                <ListContainer store={store} />

                <FormContainer store={store}/>
            </main>
        );
    }


export default App;