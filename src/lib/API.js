import axios from 'axios'

class API {
  constructor() {
    this.Server = axios.create({
      baseURL: 'http://10.0.1.13:8000'
    })
  }
  async getPosts(){
    return await this.Server.get('/blog/api/')
  }
  async getPost(post_id){
    return await this.Server.get('/blog/api/detail/',{
      params:{
        id:post_id
      }
    })
  }
}

export default API;