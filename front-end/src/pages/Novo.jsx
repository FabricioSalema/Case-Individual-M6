import React from 'react'
import axios from "axios";

const Novo = () => {
  let [title, setTitle] = React.useState('');
  let [parental_guidance, setPG] = React.useState(0);
  let [price, setPrice] = React.useState(0);

  let game = {
    title,
    parental_guidance,
    price
  }
  console.log(game);

  const handleSubmit = () => {
    axios.post('http://localhost:5656/game', game)
  }

  return (
    <div className="container text-center mt-5">
      <h1>Cadastrar game</h1>
      <form >
        <div className="form-floating mb-3">
          <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" name="title" id="title" aria-describedby="title" />
          <label className='fw-bold' >Título do game</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setPG(e.target.value) }} type="number" maxlength="2" className="form-control" id="pg" name="pg" rows="3"></input>
          <label className='fw-bold'  >Classificação indicativa</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setPrice(e.target.value) }} type="number" step="any" className="form-control" id="price" name="price" />
          <label className='fw-bold'  >Preço</label>
        </div>
        <a href='/home' onClick={handleSubmit} type="button" className="btn btn-primary">Cadastrar</a>
      </form>

    </div>
  )
}

export default Novo;