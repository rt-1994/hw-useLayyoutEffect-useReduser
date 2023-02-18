export default function Reducer(state, action) {

    switch (action.type) {
        case "inc":
            return {
                ...state,
                value: state.value+1
            }

        case "dec":
            return {
                ...state,
                value: state.value-1
            }
        case "hide":
            return {
                ...state,
                hide: !state.hide
            }

        default:
            return state
    }
}