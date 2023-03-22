import Header from './components/Header';
import {Home, Movies, Series, Episodes} from './pages';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <div className="app">
                <Header />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/movies" element={<Movies />} />
                        <Route exact path="/series" element={<Series />} />
                        <Route exact path="/episodes" element={<Episodes />} />
                    </Routes>
                </div>
                
            </div>
        </Router>
    );
}

export default App;