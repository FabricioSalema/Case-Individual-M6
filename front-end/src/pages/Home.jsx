import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5656/games').then((res) => {
      console.log(res.data);
      setGames(res.data);
    })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5656/game/delete/${id}`).then(() => {
      navigate('/home');
    });
  };

  return (
    <div className="container text-center mt-5">
      <h1>GAMES</h1>
      <div className="container">
        <table className="table table-striped table-hover table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TÍTULO</th>
              <th scope="col">CLASSIFICAÇÃO</th>
              <th scope="col">PREÇO</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {
              games.length > 0 ? (
                games.map((game) => {
                  return (
                    <tr key={game.id}>
                      <td>{game.id}</td>
                      <td>{game.title}</td>
                      <td>{game.parental_guidance}</td>
                      <td>{game.price}</td>
                      <td>
                        <a className="btn btn-primary m-1" href={`/games/${game.id}/editar/`}>Editar</a>
                        <a type="button" href="/home" className="btn btn-danger m-1" onClick={() => handleDelete(game.id)}>Excluir</a>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="5">Carregando...</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <div className="row">
          <div className="col">
            <a className="btn btn-success" href="/games/novo">Cadastrar novo game</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
