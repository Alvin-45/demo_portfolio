import './App.css'
import Body from './components/Body'
import Navpart from './components/Navpart'
import Profile from './components/Profile'
import Promo from './components/Promo'

function App() {

  return (
    <>
      <div className='wholebody'>
        <Navpart/>
        <Body/>
        <Promo/>
        <Profile/>
      </div>
    </>
  )
}

export default App
