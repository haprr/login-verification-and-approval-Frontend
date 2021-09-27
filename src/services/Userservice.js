import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1/";

class Userservice {

    getUsers(){
        return axios.get(API_BASE_URL + 'users');
    }

    createuser(username){
        return axios.post(API_BASE_URL + 'signup');
    }

    getUserById(userid){
        return axios.get(API_BASE_URL + 'signin'+'/'+'id'+'/'+ userid);
    }

    getUserByname(username){
        return axios.get(API_BASE_URL +'signin'+'/'+ 'username'+'/'+ username);
    }

    updateUser(user,userid){
         return axios.put(API_BASE_URL +'users'+'/'+ userid,user);
     }
     

    deleteUser(userid){
        return axios.delete(API_BASE_URL + 'users'+'/'+ userid);
    }
}

export default new Userservice()