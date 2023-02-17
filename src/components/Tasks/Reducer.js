export default function Reducer(state, action){
    switch (action.type){
        case "delete":
            return  state.filter(task => task.id != action.id)
        case "add":
            return [...state, action.payload]

        default: return state
    }
}