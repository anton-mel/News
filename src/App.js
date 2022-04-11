
import {useState, useEffect} from 'react';

// styles
import './App.css';

// components
import Header from './components/Header/Header';

// React Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import Home from './components/Home/Home';
import News from './components/News/News';

// App
function App() {

  // States
  const [isNews, setIsNews] = useState();

  // Wait until render all
  useEffect(() => {
    getAllNews();
  }, []);

  // Fetch all API news in json and push in useState
  const getAllNews = () => {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d7e4ddb698a94cbab5c74cb06b0b42b2';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(json => {const data = json.articles.map(el => { return {title: el.title, description: el.description} }); setIsNews(data); });
  }

  return (
      <div className='App'>
        <div className='AppContainer'>
        
        <Router>

          <Header />

          <Routes>
            <Route exact='true' path='/' element={<Home data={isNews} />} />
            <Route path='/news' element={<News data={isNews} />} />
          </Routes>

        </Router>
        
        </div>
      </div>
  );
}

// Export
export default App;
