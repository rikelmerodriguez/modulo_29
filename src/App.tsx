import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </div>
  )
}

export default App
