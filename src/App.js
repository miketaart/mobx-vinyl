import React, { Component } from "react";
import { Provider } from "mobx-react";
import VinylStore from "./stores/VinylStore";
import Vinyls from "./containers/Vinyls";

class App extends Component {
  render() {
    return (
      <Provider VinylStore={VinylStore}>
        <Vinyls />
      </Provider>
    );
  }
}

export default App;
