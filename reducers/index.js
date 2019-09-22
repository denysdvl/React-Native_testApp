import updateContentList from './content-list';
import updateUrlList from './url-list'

const reducer = (state, action) => {  
    return {
        contentList: updateContentList(state, action),
        listUrl: updateUrlList(state, action)
    }
}
export default reducer;