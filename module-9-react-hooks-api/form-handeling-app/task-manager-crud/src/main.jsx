import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddTask from './AddTask'
import DeleteTask from './DeleteTask'
import EditTask from './EditTask'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<AddTask />} />
        <Route path='/delete-task/:id' element={<DeleteTask />} />
        <Route path='/edit-task/:id' element={<EditTask />} />
      </Routes>
    </Router>
  </StrictMode>,
)
