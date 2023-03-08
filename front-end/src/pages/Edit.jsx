import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o id do produto a partir dos parâmetros da rota
  const [produto, setProduto] = useState({
    id: id,
    name: "",
    description: "",
    price: 0
  });

  useEffect(() => {
    axios.get(`http://localhost:5656/produto/${id}`).then((res) => {
      console.log(res.data);
      setProduto(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    await axios.post(`http://localhost:5656/produto/update`, produto);
    navigate('/home');
    // Lógica para lidar com o resultado da requisição de atualização
  };

  return (
    <div className="container mt-5">
      <h1>Editar Produto</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="name"
            value={produto.name}
            onChange={(e) => setProduto({ ...produto, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="descricao">Descrição</label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            rows="3"
            value={produto.description}
            onChange={(e) =>
              setProduto({ ...produto, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="preco">Preço</label>
          <input
            type="number"
            className="form-control"
            id="preco"
            name="preco"
            step="0.01"
            value={produto.price}
            onChange={(e) => setProduto({ ...produto, price: e.target.value })}
          />
        </div>
        <div className='mt-2' >
        <a onClick={handleSubmit} type="button" className="btn btn-primary">
          Salvar
        </a>
        </div>
      </form>
    </div>
  );
};

export default Edit;
