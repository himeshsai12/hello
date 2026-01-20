
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudentForm from './components/AddStudentForm'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>

  <Route path='' element={<Login />} />
  <Route path='/add' element={<AddStudentForm />} />
</Routes>

</BrowserRouter>

    </div>
  )
}
