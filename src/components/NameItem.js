import React, { useEffect } from 'react';

function NameItem({ name, activeName, setActiveName }) {

    useEffect(() => {
        console.log(`${name} is in de DOM geplaatst`);
    }, []);

    useEffect (() => {
        if (name === activeName) {
            console.log(`${name} wil graag een biertje bestellen`)
        }
    }, [name, activeName]);


  return (
    <li>
      <h3>{name}</h3>
      <button
          type="button"
          onClick={() => setActiveName(name)}>
          Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;