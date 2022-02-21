import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

type Repository = {
       idRest: number;
       restnome: string;
     };

export default function RetornaTodosRestaurantes() {
  const [data, setData] = useState<Repository[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get('http://localhost:5000/restaurante')
    setData(response.data)
  };

  const deleteData = async (id:number) => {
    await axios.delete(`http://localhost:5000/restaurante/${id}`)
    getData();
  }

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
           <div className="table-container" >
             
             <table className="pure-table pure-table-bordered" >
                 <thead>
                     <tr>
                         <th>Cód.</th>
                         <th>Nome do Restaurante</th>
                         <th>Ações</th>
                     </tr>
                 </thead>
                 <tbody>
                     { data?.map((request => {
                       return(
                         <tr key={ request.idRest }>
                             <td>{ request.idRest }</td>
                             <td>{ request.restnome }</td>
                             <td>
                               <Link to={`/edit/${request.idRest}`}>
                               <button className="pure-button">Editar</button></Link>
                               <button className="pure-button" onClick={() => deleteData(request.idRest)}>Remover</button></td>
                         </tr>
                       )}  
                     ))}
                 </tbody>
             </table>
             <br />
             <div>
             </div>
           </div>
           </div>
       )
};
