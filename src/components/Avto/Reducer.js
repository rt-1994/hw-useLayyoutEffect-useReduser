export default function Reducer(state, action) {
    switch (action.type) {
        case "delete":
            return {
                    ...state,
                    basic: {
                        ...state.basic,
                        features: state.basic.features.filter(item => item.id !== action.id)
                    },
                    features: [...state.features, state.basic.features.find((item) => item.id === action.id)]
                }

        case "add":
            return {
                ...state,
                basic: {
                    ...state.basic,
                    features: [...state.basic.features, state.features.find((item) => item.id === action.id)]
                },
                features: state.features.filter(item => item.id !== action.id)
            }


        default:
            return state
    }
}