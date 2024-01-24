import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Signature from './components/Signature'
import Input from './components/Input'
import Chat from './components/Chat'
import './App.scss'

function App() {
  return (
    <>
      <div className='App'>
        <Sidebar/>
        <div className='main'>
          <Header/>
          {/* 
            
            <Input/>
            <Footer/>
          </div> */}
          <div className='container'>
            <div className='content'>
              <Chat/>
            </div>
            
          </div>
          <div className="footer">
            <div className='container'>
              <Input/>
              <Signature/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
