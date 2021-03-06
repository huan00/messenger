import { Route, Routes } from 'react-router-dom'

import './App.css'
import Index from './pages/Index'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  )
}

export default App
