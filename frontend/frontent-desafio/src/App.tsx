import RetornaTodosRestaurantes from "./pages/RetornaTodosRestaurantes";
import CadastraRestaurante from "./pages/CadastraRestaurante";
import EditaRestaurante from "./pages/EditaRestaurante";
import VotarRestaurante from "./pages/VotarRestaurante";
import RankingVotacaodoDia from "./pages/RankingVotacaodoDia";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AppRoute() {
  return (
    <div>
    <Router>
      <Routes>
            <Route path="/votar" element = {<VotarRestaurante />}>
            </Route>
            <Route path="/ranking" element = {<RankingVotacaodoDia />}>
            </Route>
            <Route path="/" element = {<RetornaTodosRestaurantes />}>
            </Route>
            <Route path="/add" element = {<CadastraRestaurante />}>
            </Route>
            <Route path="/edit/:idRest" element={<EditaRestaurante />}>
            </Route>
          </Routes>
    </Router>
    </div>
  );
}

export  function currentDate() {
  const current = new Date();
  const date = `${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`;

  return (date);
}

export  function currentTime() {
  const current = new Date();
  const currentHour = current.getHours()
  const currentMinute = current.getMinutes()
  if (currentHour < 10 && currentMinute > 9) {
  return (`0${current.getHours()}:${current.getMinutes()}`)
  } else if (currentHour > 9 && currentMinute < 10) {
    return (`${current.getHours()}:0${current.getMinutes()}`)
  } else if (currentHour < 10 && currentMinute < 10) {
    return (`0${current.getHours()}:0${current.getMinutes()}`)
  } else {return (`${current.getHours()}:${current.getMinutes()}`)}
}


 
export default AppRoute;




