const initState={
    details:{
        firstName: '',
        lastName: '',
        email:'',
        password:'',
        address:''
    }
}

const rootReducer = (state = initState, action) =>{
    console.log(action);
    return state;
} 

export default rootReducer;