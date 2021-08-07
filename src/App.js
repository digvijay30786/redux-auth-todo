import './App.css';
import { Todo } from './components/Todo';
import { Login } from './components/Login';
import { Switch, Route } from "react-router-dom";
import { PrivateRouter } from './router/privateRouter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/'>
              <Login/>
          </Route>
           <PrivateRouter exact path='/todos'>
             <Todo />
          </PrivateRouter>
        </Switch>
      </header>
    </div>
  );
}

export default App;
