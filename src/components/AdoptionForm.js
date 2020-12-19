import React from 'react';

export default function AdoptionForm ({ pets, previewPet, adoptSelectedPet }) {

  return (
    <form>
      <select onChange={previewPet}>
        {
          pets.map(p => (
            <option key={p.name}>{p.name}</option>
          ))
        }
      </select>
      <button id='save-button' onClick={adoptSelectedPet}>Adopt</button>
    </form>
  );
}

