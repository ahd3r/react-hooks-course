import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../utils/context'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav() {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        <li>
          <NavLink
            to='/'
            exact
            activeStyle={activeStyle}
            className='nav-link'>
            Popular
              </NavLink>
        </li>
        <li>
          <NavLink
            to='/battle'
            activeStyle={activeStyle}
            className='nav-link'
          >
            Battle
          </NavLink>
        </li>
      </ul>
      <button
        style={{ fontSize: 30 }}
        className='btn-clear'
        onClick={changeTheme}
      >
        {theme === 'light' ? '🔦' : '💡'}
      </button>
    </nav>
  )
}