const initialState = {
  userList: [
    // {
    //   Title: "developer",
    //   Releasedate: "20-09-2022",
    //   Description: "second",
    //   Status: "completed",
    //   Environment: "pre",
    // },
    // {
    //   Title: "tester",
    //   Releasedate: "20-09-2022",
    //   Description: "first",
    //   Status: "completed",
    //   Environment: "pre",
    // },
    // {
    //   Title: "It",
    //   Releasedate: "20-09-2022",
    //   Description: "third",
    //   Status: "completed",
    //   Environment: "pre",
    // }
  ]
};

export default function Myreducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    // case "api_success": {
    // console.log("button")

    // return {
    //   ...state,
    //   api: true,
    // };
    // }
    // case "api_success2": {
    //   console.log("button2")

    //   return {
    //     ...state,
    //     api2: true,
    //   };
    // }
    // case "api_success3": {
    //   console.log("button3")

    //   return {
    //     ...state,
    //     api3: true,
    //   };
    // }
    // case "api_success4": {
    //   console.log("button4")

    //   return {
    //     ...state,
    //     api4: true,
    //   };
    // }
    // case "Table_success": {
    //   console.log("Reducer Table")

    //   return {

    //     ...state,
    //     arr: action.data
    //   };
    // }

    // case "Delete_Request": {
    //   console.log("delete Table")



    //   return {

    //     ...state,
    //     arr: action.payload

    //   };
    // }
    case "formdata": {
      console.log("formdata")
      console.log(action.payload)


      // const { userList } = state
      // userList.push(action.payload)
      // console.log(userList)
      // console.log(state)
      const newList= [...state.userList]
      newList.push(action.payload)
      return {
        ...state,
        userList: newList,
      };
    }
    case "saveChanges": {
     const projectIndx = state.userList.findIndex((each) => each.id == action.payload.id) 
      const newList= [...state.userList]
      newList[projectIndx] = action.payload
      return {
        ...state,
        userList: newList,
      };
    }
    

    default:
      return state;
  }
}



//if you do this approach to assign direct values to state it may crash redux don't recommend this approach
// export default function Myreducer(state ="shankar", action = null) {
//   switch (action.type) {
//     case "api_success": {
//       console.log("button");
//      return state="shiva";
//     }
//   }
//   }

