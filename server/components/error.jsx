import React, { Component, PropTypes } from 'react';

export default class ErrorComp extends Component {

  static propTypes = {
    error: PropTypes.object.isRequired
  };



  /*
   * RENDERING
   */

  render() {
    const {error} = this.props;
    const json = JSON.stringify(error, null, 2);
    const dump = `${json}\n\n${error.stack}`;

    return (
      <div className="error">
        <h1>Error - {error.message}</h1>
        <textarea defaultValue={dump} style={{width: '100%', height: 600}} />
      </div>
    );
  }

}
