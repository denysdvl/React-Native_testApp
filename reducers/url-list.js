
const changeTabs = (state, payload) =>{
const { urlList} = state.listUrl;
const id = urlList.findIndex(item => item.id===payload)
const oldItem = urlList.find(item => item.id===payload)
const newArr = urlList.map((item)=>{
    return{
        id: item.id,
        name: item.name,
        active: false,
        url: item.url 
    }
})
const newItem ={ 
    id: oldItem.id,
    name: oldItem.name,
    active: true,
    url: oldItem.url
}
return[
    ...newArr.slice(0, id),
    newItem,
    ...newArr.slice(id + 1)
]
}

const updateUrlList = (state, action) => {
    
    if(state === undefined){
        return{
       urlList: [
           {id: 1, name: 'bitcoin', active: true, url: 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-23&sortBy=publishedAt&apiKey=870c05c78e9b4aab8e68197eff827c91'},
            {id: 2, name: 'apple', active: false, url: 'https://newsapi.org/v2/everything?q=apple&from=2019-09-22&to=2019-09-22&sortBy=popularity&apiKey=870c05c78e9b4aab8e68197eff827c91'},
            {id: 3, name: 'business', active: false, url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=870c05c78e9b4aab8e68197eff827c91'}
        ]
       }
    }
    switch (action.type) {
        case 'CHANGE_ACTIVE_TABS':
        return{
            urlList: changeTabs(state, action.payload)
        }
        default: 
        return state.listUrl
    }
}
export default updateUrlList;