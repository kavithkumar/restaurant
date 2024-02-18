import axios from 'axios'
const login=(user)=>{
    return axios.post('http://localhost:8081/customer/login',user)
}
const logout=()=>{
    
}
const UserService={
    login,
    logout
}
export default UserService;