import './css/Menu.css'
import { NavLink } from 'react-router-dom'
function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <div className="left-menu">
                  <li>
                     <NavLink to="/" style={{ padding: '11px 30px' }}>
                        <img src="/images/logo1.png" alt="날씨별 옷차림" width="50" />
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/">오늘의 날씨</NavLink>
                  </li>
                  <li>
                     <NavLink to="/forecast">5일간 날씨</NavLink>
                  </li>
               </div>
               <div className="right-menu">
                  <li className="right-selects">
                     <select>
                        <option value="incheon">인천</option>
                        <option value="seoul">서울</option>
                     </select>
                     <select>
                        <option value="1130">11월30일</option>
                        <option value="1131">11월31일</option>
                        <option value="1201">12월1일</option>
                     </select>
                     <select>
                        <option value="0600">아침(6시)</option>
                        <option value="1200">점심(정오)</option>
                        <option value="1800">오후(18시)</option>
                     </select>
                  </li>
                  <li className="login">
                     <NavLink to="/login">로그인</NavLink>
                  </li>
               </div>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
