import React,{useReducer,createContext, useEffect} from 'react'
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user"))|| null,
    loading:false,
    error:null,
}

export const AuthContext = createContext(INITIAL_STATE);
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGGIN_START":
           return {
            user:null,
            loading:true,
            error:null,
        }
        case "LOGGIN_SUCCESS":
            return {
             user:action.payload,
             loading:false,
             error:null,
         }
         case "LOGGIN_FAILURE":
            return {
             user:null,
             loading:false,
             error:action.payload,
         }
         case "LOGOUT":
            return {
             user:null,
             loading:true,
             error:null,
         }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.user))
})
    return (
        <AuthContext.Provider value={{ 
            user: state.user, 
            loading: state.loading,
            error: state.error,
            dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}