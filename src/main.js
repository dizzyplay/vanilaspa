import App from './lib/app.js';
import Router from './lib/router.js'
import API from './lib/API.js'

import Home from './components/home.js'


const app = new App('#app');
const api = new API();

const postTemplate = (post) => `
  <div>
    <a href="#/post/${post.id}">${post.id}</a><br>
    <img src="http://localhost:8000${post.photo}" width="200"><br>
    ${post.nickname}<br>
    ${post.content}
  </div>
`;

app.addComponent({
  name: 'posts',
  model: {
    posts:[],
  },
  view(model) {
    const dogsHTML = model.posts.reduce((html,post)=>html + `<li>${postTemplate(post)}</li>`,'');
    return `${model.posts.length} 개의 포스트가 있다.
    <ul>
     ${dogsHTML}
     </ul>
    `;
  },
  async controller(model){
    let res = await api.getPosts()
    model.posts = res.data;
  }
})

app.addComponent({
  name:'post',
  model:{
    post:{},
  },
  view(model) {
    return postTemplate(model.post)
  },
  async controller(model){
    let res = await api.getPost(router.params[1])
    model.post = res.data;
    console.log(res)
  }
})

app.addComponent(Home);

const router = new Router(app);
router.addRoute('posts','^#/posts$')
router.addRoute('post','^#/post/([0-9]*)$')
router.addRoute('home','^#/home$')