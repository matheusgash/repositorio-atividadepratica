import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/login";
import PaginaInicialCategorias from "./pages/categoria/PaginaInicialCategoria"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <PaginaInicialCategorias />
      
    </div>
  );
}

export default App;
