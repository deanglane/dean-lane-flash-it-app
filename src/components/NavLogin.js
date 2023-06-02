import { Link } from 'react-router-dom';

const NavLogin = () => {
  return (
    <ul>
      <li>
        <Link to='/build'>Build</Link>
      </li>
      <li>
        <Link to='/review'>Review</Link>
      </li>
    </ul>
    
  )
}

export default NavLogin