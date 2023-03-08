import React from 'react'
import axios from "axios";

const Novo = () => {
  let [name, setName] = React.useState('');
  let [description, setDescription] = React.useState('');
  let [price, setPrice] = React.useState(0);

  let produto = {
    name,
    description,
    price
  }
  console.log(produto);

  const handleSubmit = () => {
    axios.post('http://localhost:5656/produto', produto)
  }


  return (
    <div className="container text-center mt-5">
      <h1>Cadastrar produto</h1>
      <form >
        <div className="form-floating mb-3">
          <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" name="name" id="name" aria-describedby="nome" />
          <label className='fw-bold' >Nome</label>
        </div>
        <div className="form-floating mb-3">
          <textarea onChange={(e) => { setDescription(e.target.value) }} type="text" className="form-control" id="description" name="description" rows="3"></textarea>
          <label className='fw-bold'  >Descrição</label>
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

export default Novo