import { useState } from 'react';
import html2canvas from 'html2canvas';
import '../styles/App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const changeLinea1 = (e) => {
    setLinea1(e.target.value);
  }

  const changeLinea2 = (e) => {
    setLinea2(e.target.value);
  }

  const changeImage = (e) => {
    setImage(e.target.value);
  }

  const exportImg = (e) => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      let img = canvas.toDataURL("image/png");

      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App">
      {/* select picker */}
      <select onChange={changeImage}>
        <option value="suspicius.jpeg">suspicius</option>
        <option value="vegeta.jpg">Vegeta</option>
        <option value="fire.jpeg">Fire girl</option>
        <option value="bbboy.jpeg">Baby Boy</option>
        <option value="bob.jpeg">Bob esponja</option>
      </select>
      <br />
      {/* input text - primera linea */}
      <input onChange={changeLinea1} type="text" placeholder="Linea 1" />
      <br />
      {/* input text - segunda linea */}
      <input onChange={changeLinea2} type="text" placeholder="Linea 2" />
      <br />

      <button onClick={exportImg}>Export</button>

      <div className="meme-container" id="capture">
        <span className="meme-l1">{linea1}</span>
        <span className="meme-l2">{linea2}</span>
        <img src={"/images/"+ image} className="meme-image" alt="meme" />
      </div>
    </div>
  );
}

export default App;
