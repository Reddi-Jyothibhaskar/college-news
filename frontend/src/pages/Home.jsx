import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';

const API_BASE = process.env.REACT_APP_API_URL;

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/articles`)
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className = "home-container" style={{ padding: '20px' }}>
      <h2 style = {{ color: 'rgb(5, 10, 98)' }}>UCEK flash updates</h2>
      <div className = "article-grid">
        {articles.map(article => (
          <ArticleCard className = "article-card" key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
