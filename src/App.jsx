import LogoAndHeader from './component/LogoAndHeader'
import { Button } from '@mui/material'
import './App.css'

function App() {

  return (
      <>
      <LogoAndHeader></LogoAndHeader>
      <div className='button-container'>
        <Button variant="contained" className='button-style'>Click Me!</Button>  
      </div>
      </>
  )
}

export default App
