export const initialState = {
  posts : []
}

export default (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_POSTS':
          return {
            ...state,
            posts : action.payload
          };
        case 'CREATE_POST' :
          let newPost = [...state.posts, action.payload.finalData];
            return {
              ...state,
              posts : newPost
            };
        case 'UPDATE_POST' :
          let updatedData = [...state.posts];
          updatedData[action.payload.data.id - 1] = action.payload.finalData;
            return {
              ...state,
              posts : updatedData
            };
        case 'DELETE_POST' :
          let newPosts = [...state.posts];
          let index = newPosts.findIndex(x => x.id === action.payload.id);
          newPosts.splice(index, 1);
          return {
            ...state,
            posts : newPosts,
          };
        default:
            return state;     
  }
};