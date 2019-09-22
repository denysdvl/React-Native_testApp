
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
           {id: 1, name: 'bitcoin', active: true, url: 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-22&sortBy=publishedAt&apiKey=a7870a79892d4248878b7b1db739da1d'},
            {id: 2, name: 'apple', active: false, url: 'https://newsapi.org/v2/everything?q=apple&from=2019-09-21&to=2019-09-21&sortBy=popularity&apiKey=a7870a79892d4248878b7b1db739da1d'},
            {id: 3, name: 'business', active: false, url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a7870a79892d4248878b7b1db739da1d'}
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