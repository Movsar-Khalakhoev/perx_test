import { useState } from 'react'
import s from './Navbar.module.sass'
import { NavLink } from 'react-router-dom'
import { CART_ROUTE, PRODUCTS_ROUTE } from '../../routePaths'

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  return (
    <div className={s.navbar}>
      <div className={s.logo}>Машины.ру</div>
      <div
        className={`${s.sections_wrapper} ${
          isActiveMenu ? s.sections_wrapper_active : ''
        }`}
      >
        <span
          className={`${s.hamburger} ${isActiveMenu ? s.hamburger_active : ''}`}
          onClick={() => setIsActiveMenu(prev => !prev)}
        >
          <span className={s.line_1} />
          <span className={s.line_2} />
          <span className={s.line_3} />
        </span>
        <div className={s.sections}>
          <NavLink
            exact
            to={PRODUCTS_ROUTE}
            className={s.section}
            activeClassName={s.section_active}
            onClick={() => setIsActiveMenu(false)}
          >
            Товары
          </NavLink>
          <NavLink
            exact
            to={CART_ROUTE}
            className={s.section}
            activeClassName={s.section_active}
            onClick={() => setIsActiveMenu(false)}
          >
            Корзина
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
