export default function Reducer(state, action){
    switch (action.type){
        case "check":
            return state.map((item)=> {
                if(action.id === item.id){
                    console.log(item)
                    return {...item, checked: !item.checked}
                }
                return item
            })
        case "reset":
            return state.map((item)=> {
                return {...item, checked:false}
            })
        default: return state
    }
}