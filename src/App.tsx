import { Link, Outlet } from 'react-router-dom'
import { ThemeProvider } from './components'
import './App.css'

export default function App(): JSX.Element {
  return (
    <>
      <ThemeProvider>
        <nav>
          <Link to="/todos" className="navigation-item">
            ✅
          </Link>
          <Link to="/groceries" className="navigation-item">
            🛍️
          </Link>
          <Link to="/money" className="navigation-item">
            💰
          </Link>
          <Link to="/settings" className="navigation-item">
            ⚙️
          </Link>
          <Link to="/test" className="navigation-item">
            Test
          </Link>
        </nav>
        <Outlet />
      </ThemeProvider>
    </>
  )
}
