
// Components
import NewsItem from '../NewsItem/NewsItem';

// Styles
import './css/styles.css';

// Home
const Home = (data) => {

    const posts = data.data && data.data.slice(0, 6);

    return data.data ? (

        <div className='Home'>
            <div className='HomeBanner'>
                Welcome buddy!
            </div>  

            <div className='NewsList'>
                {posts.map((item, index) => <NewsItem item={item} index={index} />)}
            </div>
        </div>

    ) : 'Loading...';
}

// Export
export default Home;