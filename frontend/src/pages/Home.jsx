import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/articles')
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
