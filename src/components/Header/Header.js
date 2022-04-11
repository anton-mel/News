

// Styles
import './css/styles.css';

// React Router
import {Link} from 'react-router-dom';

// Header Component
const Header = () => {
    return (
        <div className='Header'>
            <h3>LogoName</h3>
            <ul>
                <li><Link exact to='/'>Home</Link></li>
                <li><Link to='/news'>News</Link></li>
            </ul>
        </div>
    );
}

// Export
export default Header;