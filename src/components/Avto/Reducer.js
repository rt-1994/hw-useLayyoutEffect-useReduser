export default function Reducer(state, action) {
    const {id, type} = action;

    switch (type) {
        case "delete":
            return {
                    basic: {
                        ...state.basic,
                        features: state.basic.features.filter(item => item.id !== id)
                    },
                    features: [...state.features, state.basic.features.find((item) => item.id === id)]
                }

        case "add":
            return {
                basic: {
                    ...state.basic,
                    features: [...state.basic.features, state.features.find((item) => item.id === id)]
                },
                features: state.features.filter(item => item.id !== id)
            }

        default:
            return state
    }
}