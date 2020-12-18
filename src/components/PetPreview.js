import React, { Component } from 'react';
import AdoptionForm from './AdoptionForm';

export default class PetPreview extends Component {

  constructor () {

    super();

  }

  render () {

    return (
      <div className="preview">
        <div>
          <h5>Preview:</h5>
          <img src={'TODO'} />
        </div>

      </div>
    );

  }
}
