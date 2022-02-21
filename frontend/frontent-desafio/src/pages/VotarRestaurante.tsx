import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { currentDate, currentTime } from "../App";

export default function VotarRestaurante() {
  const current = new Date();
  const initialValue ={
    votos: '0',
  }
  const [data, setData] = useState(initialValue);
  const navigate = useNavigate();
  const { idRest } = useParams();

  
  function onChange(ev: any) {
    const { name, value } = ev.target

    setData({ ...data, [name]: value })
  }

  const updateData = async (e: any) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/VotarRestaurante/${idRest}`, {
    votos: data,
    });
    navigate("/");
  }

  type Repository = {
    idRest: number;
    restnome: string;
  };

  function getRestaurante() {
    const [data, setData] = useState<Repository[]>([]);
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const response = await axios.get('http://localhost:5000/restaurante')
      setData(response.data)
    };
    return data
  }
  const listRestaurante = getRestaurante();


  if (current.getHours() >= 9 && current.getHours() < 12 ) {
  return (
    <div>
            <div className="custom-menu-wrapper">
            <div className="pure-menu custom-menu custom-menu-top">
            <Link to="/" className="pure-menu-item pure-menu-link"><label className="pure-menu-heading custom-menu-brand">GUIA DE RESTAURANTES</label></Link>
              <a href="#" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
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
     
      <form className="login-form" onSubmit={updateData}>
            <div className="login-form-group">
              <label>Nome:</label>
                <input name="nome_usuario" className="form-field" placeholder="Nome" type="text" id="nome_usuario" onChange={onChange} />
            </div><br />
            <label>Nome:</label>
            <select onChange={onChange}  name="id_rest" id="id_rest" > 
            <option value="" selected disabled hidden>Escolha um restaurante</option>
            { listRestaurante?.map((request => {
            return(
              <option key={ request.idRest } value={ request.idRest }>{ request.restnome }</option>
               )}))}
            </select><br /><br />
            <div className="login-form-group"><label>Data:</label>
                <input name="data" className="form-field" type="date" value={currentDate()} readOnly />
            </div><br />

            <div className="login-form-group"><label>Horario:</label><br />
                <input name="data" className="form-field" type="time" value={currentTime()} readOnly />
            </div><br />
            <br />
            <button className="pure-button" type="submit">Votar</button>
            <Link to="/">
                 <button className="pure-button" type="submit">Voltar</button>
            </Link>
      </form>
    </div>
    </div>
)
            } else { 
              
                return (
                  <div>
                          <div className="custom-menu-wrapper">
                          <div className="pure-menu custom-menu custom-menu-top">
                          <Link to="/" className="pure-menu-item pure-menu-link"><label className="pure-menu-heading custom-menu-brand">GUIA DE RESTAURANTES</label></Link>
                            <a href="#" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
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
                  <div className="time-container">
                   
                    <h3>Votação disponível somente</h3><h3> de 09:00 às 11:50 </h3>
                          <Link to="/">
                               <button className="pure-button" type="submit">Voltar</button>
                          </Link>
                  </div> 
                  </div>
                  
              )
              
            }}