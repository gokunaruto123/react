import "./style.css";
import styled from "styled-components";
import Header from "./comp/Header/Header";
import Footer from "./comp/Footer/Footer.js";
import Home from "./comp/Home/Home.js";
import Nav from "./comp/Nav/Nav.js"
import { TelaInteira } from "./styledglobal";
function App() {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
  return (
  
  <TelaInteira>
    <Header/>
    <Nav/>
    <Home reproduz={reproduzVideo} />
    <Footer/>
  </TelaInteira>
  );
}

export default App;
