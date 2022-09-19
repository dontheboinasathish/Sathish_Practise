const initialState = {
    list: []
}
export default function DataReducer(state = initialState, action = null) {
    if (!state) {
        state = initialState
    }
    switch (action.type) {
        case "table_success": {
            console.log("orye bayatakii raaaa reducer");
            state.list = action.data
            console.log(" state.list", state.list);
            return {
                ...state, list: state.list

            }



        }

        default:
            return state;
    }
}
