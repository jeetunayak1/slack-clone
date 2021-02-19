import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="App">
      <Router>
        {!user ? (
          <h1>
            <Login />
          </h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <h1>Welcome</h1>
                </Route>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
              {/*React Router->chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
