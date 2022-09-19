const initialState = {
    list: []
}

export default function AddReducer(state = initialState, action = null) {
    if (!state) {
        state = initialState
    }
    switch (action.type) {

        case "formdata": {
            console.log("hhhhhhhhhhhhhh")
            console.log(action.payload)
            // const newlist = [...state.list]
            // newlist.push(action.payload)
            return {
                ...state, list: [...state.list, action.payload],
            }
        }
        case "edit_details": {
            console.log(action.payload)
            const getIndex = state.list.findIndex((each) => each.id == action.payload.id);
            console.log("getIndex", getIndex);
            const newList = [...state.list];
            newList[getIndex] = action.payload;
            // const newlist = [...state.list]
            // newlist.push(action.payload)
            return {
                ...state, list: newList,
            }
        }
        default:
            return state;
    }
}