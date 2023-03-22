import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">
                        <div>Flix <span className="red">TV</span></div>
                    </Link>
                </li>
                <li>
                    <Link to="/movies">
                        <div>Movies</div>
                    </Link>
                </li>
                <li>
                    <Link to="/series">
                        <div>Series</div>
                    </Link>
                </li>
                <li>
                    <Link to="/episodes">
                        <div>Episodes</div>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;