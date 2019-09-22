const checkItem = (state, action ) => {
    const nawArr = action.filter(item => item.author!==null&&item.title)
return nawArr;
}


const updateContentList = (state, action) => {
    
    
    if(state === undefined){
        return{
       content: [],
       loading: true,
       error: null,
       visibleItem: []
       }
    }
    switch (action.type){
        case 'FETCH_CONTENT_REQUEST':
            return {  
                content: [],
                loading: true,
                error: null,
                visibleItem: []
            }
        
            case 'FETCH_CONTENT_SUCCESS':
            return {
                content: action.payload,
                loading: false,
                error: null,
                visibleItem:  checkItem(state, action.payload)  
            }

            case 'FETCH_CONTENT_FAILURE':
                return {
                    content: [],
                    loading: false,
                    error: action.payload,
                    visibleItem: []
                } 
                default:
                        return state.contentList
    }
}
export default updateContentList;