import Sidebar from './components/Sidebar'
import Header from './components/Header'
import './App.scss'

function App() {

  return (
    <>
      <div className='App'>
        <Sidebar/>
        <div className='content'>
          <Header/>
        </div>
      </div>
      
    </>
  )
}

export default App
