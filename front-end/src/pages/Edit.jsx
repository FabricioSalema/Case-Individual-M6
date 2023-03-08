import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o id do game a partir dos parâmetros da rota
  const [game, setGame] = useState({
    id: id,
    title: "",
    parental_guidance: 0,
    price: 0
  });

  useEffect(() => {
    axios.get(`http://localhost:5656/game/${id}`).then((res) => {
      console.log(res.data);
      setGame(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    await axios.post(`http://localhost:5656/game/update`, game);
    navigate('/home');
    // Lógica para lidar com o resultado da requisição de atualização
  };

  return (
    <div className="container mt-5">
      <h1>Editar Game</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="title">Título do game</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={game.title}
            onChange={(e) => setGame({ ...game, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="pg">Classificação indicativa</label>
          <input
            className="form-control"
            id="pg"
            name="pg"
            rows="3"
            type="number"
            step="0.01"
            value={game.parental_guidance}
            onChange={(e) =>
              setGame({ ...game, parental_guidance: e.target.value })
            }
          ></input>
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="preco">Preço</label>
          <input
            type="number"
            className="form-control"
            id="preco"
            name="preco"
            step="0.01"
            value={game.price}
            onChange={(e) => setGame({ ...game, price: e.target.value })}
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
