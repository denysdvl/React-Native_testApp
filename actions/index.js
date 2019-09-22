
import ContentService from './../service'


const contentService = new ContentService()

const contentLoaded = (newContent) => {
   
    return {
        type: 'FETCH_CONTENT_SUCCESS',
        payload: newContent
    }
   
}

const contentRequested = () =>{
    return{
        type: 'FETCH_CONTENT_REQUEST'
    }
};

const contentError = (error) => {
    return {
        type: 'FETCH_CONTENT_FAILURE',
        payload: error
    }
}
const changeActiveTabs = (id) => {
    return{
        type: 'CHANGE_ACTIVE_TABS',
        payload: id
    }
}
const  fetchContent = (dispatch) => (url, id) => {
    dispatch(contentRequested());
    dispatch(changeActiveTabs(id))
    contentService.getAllContent(url)
    .then((data) => dispatch(contentLoaded(data)))
    .catch((err) => dispatch(contentError(err)))
}

export {
    fetchContent,
}