const imageReducer = (state = [], action) => {  
    switch (action.type) { 
      case 'ADD_IMAGE_URL':  
        return {
          url: action.url
        }
      default:  
        return state  
    }  
  }  
export default imageReducer  