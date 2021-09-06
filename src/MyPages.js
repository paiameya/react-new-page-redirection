
import { useStore } from 'react-redux'
import { useParams } from 'react-router-dom'
function MyPages() {
    const { id } = useParams();
    const store = useStore()
    const getHtml = () => {
        const pageData = store.getState().pages.find(el => el.id === parseInt(id))
        return pageData.data.attributes.html
    }
    console.log(typeof id,  typeof store.getState().pages[0].id,getHtml() )
    // return <div>{store.getState()}</div>
    return (<div className="mypages-card" key={id}>
       
            <div className="mypages-card__content"
                dangerouslySetInnerHTML={{ __html: getHtml()}}></div>
    
    </div>);
}

export default MyPages