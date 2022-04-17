import React from 'react';

function App() {
  fetch('http://private-cc77e-aff.apiary-mock.com/posts')
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div>Hello world</div>;
}

export default App;
