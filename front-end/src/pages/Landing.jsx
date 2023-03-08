import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className='mt-5'>Bem-vindo ao sistema de gerenciamento de produtos!</h1>
      <div className="row mt-5">
        <div className="col-md-6">
          <Link to="/produtos/novo" className="btn btn-success btn-lg">
            Criar novo produto
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/home" className="btn btn-primary btn-lg">
            Ir para página principal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing