import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="blog" element={<Navigate to="/" replace />} />
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
