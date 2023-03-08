import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5656/produtos').then((res) => {
      console.log(res.data);
      setProdutos(res.data);
    })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5656/produto/delete/${id}`).then(() => {
      navigate('/home');
    });
  };

  return (
    <div className="container text-center mt-5">
      <h1>PRODUTOS</h1>
      <div className="container">
        <table className="table table-striped table-hover table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">DESCRIÇÃO</th>
              <th scope="col">PREÇO</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {
              produtos.length > 0 ? (
                produtos.map((produto) => {
                  return (
                    <tr key={produto.id}>
                      <td>{produto.id}</td>
                      <td>{produto.name}</td>
                      <td>{produto.description}</td>
                      <td>{produto.price}</td>
                      <td>
                        <a className="btn btn-primary m-1" href={`/produtos/${produto.id}/editar/`}>Editar</a>
                        <a type="button" href="/home" className="btn btn-danger m-1" onClick={() => handleDelete(produto.id)}>Excluir</a>
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
            <a className="btn btn-success" href="/produtos/novo">Cadastrar novo produto</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
