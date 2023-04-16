import React, { Component } from "react";

import ParticlesBg from "particles-bg";

export default class Example extends Component {
  render() {
    return (
      <>
        <ParticlesBg num={10} type="square" bg={true} />
      </>
    );
  }
}
