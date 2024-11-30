import './css/Menu.css'
import { NavLink } from 'react-router-dom'
import MenuSelector from './MenuSelector'
function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <div className="left-menu">
                  <li>
                     <NavLink to="/" className="logo-link">
                        <img src="/images/logo1.png" alt="날씨별 옷차림" width="50" />
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/">오늘의 날씨</NavLink>
                  </li>
                  <li>
                     <NavLink to="/day5">5일간 날씨</NavLink>
                  </li>
                  {/* <li> <NavLink to="/download">파일 변환</NavLink></li> */}
               </div>
               <div className="right-menu">
                  <li className="right-selects">
                     <MenuSelector />
                  </li>
                  {/* <li className="login">
                     <NavLink to="/login">로그인</NavLink>
                  </li> */}
               </div>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
