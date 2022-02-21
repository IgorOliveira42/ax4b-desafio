import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditaRestaurante() {
  const [data, setData] = useState('');
  const navigate = useNavigate();
  const { idRest } = useParams();

  const updateData = async (e: any) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/restaurante/${idRest}`, {
    restnome: data,
    });
    navigate("/");
  }

  useEffect(() => {
    getDataById();
  }, []);

  const getDataById = async () => {
    const response = await axios.get(`http://localhost:5000/restaurante/${idRest}`)
    setData(response.data.restnome)
  };

  return (
    <div>
      <div className="custom-menu-wrapper">
    <div className="pure-menu custom-menu custom-menu-top">
    <Link to="/" className="pure-menu-item pure-menu-link"><label className="pure-menu-heading custom-menu-brand">GUIA DE RESTAURANTES</label></Link>
      <a href="/" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
    </div>
    <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
      <ul className="pure-menu-list">
    <Link to="/add">
      <li className="pure-menu-item pure-menu-link">Cadastrar restaurante</li>
    </Link>
    <Link to="/votar">
      <li className="pure-menu-item pure-menu-link">Votar restaurante</li>
    </Link>
    <Link to="/ranking">
      <li className="pure-menu-item pure-menu-link">Ranking</li>
    </Link>
    </ul>
    </div>
    </div>
           <div className="container">
             <form onSubmit={ updateData } className="pure-form pure-form-stacked">
                 <div>
                     <label>Restaurante:</label>
                     <input type="text" placeholder="Nome do Restaurante" value={ data } onChange={ (e) => setData(e.target.value)} />
                 </div>
                 <button className="pure-button" type="submit">Salvar</button>
                 <Link to="/">
                 <button className="pure-button" type="submit">Voltar</button>
                 </Link>
             </form>
           </div>
      </div>
       )

};