import { useTheme, useThemeUpdate } from '../components'
import './Settings.css'

export function Settings(): JSX.Element {
  const isDarkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  function showThemeEmoji(): JSX.Element {
    if (isDarkTheme) {
      return <span>🌑</span>
    }
    return <span>🌕</span>
  }

  return (
    <div className="settings">
      <h2>My Settings</h2>
      <p>Current Theme is: {showThemeEmoji()}</p>
      <button onClick={toggleTheme}>Toggle Theme 🌓</button>
    </div>
  )
}
