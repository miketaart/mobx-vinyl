import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("VinylStore")
@observer
class Vinyls extends Component {
  render() {
    return <div></div>;
  }
}

export default Vinyls;
