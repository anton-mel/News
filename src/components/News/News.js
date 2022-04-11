
// Components
import NewsItem from '../NewsItem/NewsItem';

// Styles
import './css/styles.css';

// Home
const News = (data) => {
    return  data.data ? (

        <div className='Home'>
            <div className='NewsListAll'>
                {data.data && data.data.map((item, index) => <NewsItem item={item} index={index} />)}
            </div>
        </div>

    ) : 'Loading...';
}

// Export
export default News;