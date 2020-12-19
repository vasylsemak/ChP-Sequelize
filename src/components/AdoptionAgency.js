import React, { Component } from 'react';
import PetPreview from './PetPreview';

export default class AdoptionAgency extends Component {

  constructor () {
    super();

    this.state = {
      dogs: [
        { name: 'Taylor',  imgUrl: 'src/img/taylor.png'  },
        { name: 'Reggie',  imgUrl: 'src/img/reggie.png'  },
        { name: 'Pandora', imgUrl: 'src/img/pandora.png' }
      ],
      cats: [
        { name: 'Earl',    imgUrl: 'src/img/earl.png'   },
        { name: 'Winnie',  imgUrl: 'src/img/winnie.png' },
        { name: 'Fellini',  imgUrl: 'src/img/fellini.png' }
      ],
      petToAdopt: {}
    };

    this.adoptPet = this.adoptPet.bind(this);
  }

  adoptPet(pet) {
    this.setState({ petToAdopt: pet });
  }

  render () {
    const { petToAdopt } = this.state;
    const { name } = petToAdopt;

    return (
      <div>
        <h1>Adopt</h1>

        <div className="clearfix">
          <h3>You are adopting: {name}</h3>
        </div>

        <div className="clearfix">

          <div className="block" id="dogs">
            <h2>Dogs</h2>
            <PetPreview pets={this.state.dogs} adoptPet={this.adoptPet} />
          </div>

          <div className="block" id="cats">
            <h2>Cats</h2>
            <PetPreview pets={this.state.cats} adoptPet={this.adoptPet} />
          </div>

        </div>
      </div>
    );
  }

}
