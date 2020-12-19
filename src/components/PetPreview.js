import React, { Component } from 'react';
import AdoptionForm from './AdoptionForm';

export default class PetPreview extends Component {
  constructor () {
    super();
    this.state = {
      petToPreview: {}
    };

    this.previewPet = this.previewPet.bind(this);
    this.adoptSelectedPet = this.adoptSelectedPet.bind(this);
  }

  previewPet(event) {
    const { pets } = this.props;
    const selectedPet = pets.find(p => p.name === event.target.value);
    this.setState({ petToPreview: selectedPet });
  }

  adoptSelectedPet() {
    const { petToPreview } = this.state;
    const { adoptPet } = this.props;
    adoptPet(petToPreview);
  }

  render () {
    const imgUrl = this.state.petToPreview.imgUrl;
    const pets = this.props.pets;

    return (
      <div className="preview">
        <div>
          <h5>Preview:</h5>
          <img src={imgUrl} />
        </div>
        <AdoptionForm
          pets={pets}
          previewPet={this.previewPet}
          adoptSelectedPet={this.adoptSelectedPet}
        />
      </div>
    );

  }
}
