
// Styles
import './css/styles.css';

// NewsItem
const NewsItem = (item, index) => {
    return (
        <div className="NewsItem" key={index}>
            <h1>{item.item.title && item.item.title}</h1>
            <p>{item.item.description && item.item.description}</p>
        </div>
    );
}

// Export
export default NewsItem;