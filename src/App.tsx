// import { BrowserRouter, Route, Switch } from "react-router-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import {AuthContextProvider} from "../src/contexts/AuthContext";
import "dotenv/config";

function App(): JSX.Element {
 
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <Switch>
      <Route path="/rooms/new" exact component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <Route path="/" exact component={Home} />
      </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
//
export default App;