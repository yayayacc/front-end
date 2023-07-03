/**
 * 路由定义
 * 作者：王坤 2022-03
 */

const routes = [

  // 访问路由"/", 自动重定向到"/home"
  {
    path: '/',
    redirect: '/home'
  },   
  {
    // 主页面
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    children: [
      // 默认页面
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index/index.vue')
      },
      // 角色列表
      {
        path: '/role/index',
        name: 'roleList',
        component: () => import('@/views/role/index.vue'),
        meta: {nav: ['角色管理', '角色列表']}
      }
    ]
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    name: "NotFound",
    component: () => import('@/views/404.vue')
  },
  {
    path: '/user',
    name: "User",
    component: () => import('@/views/user.vue')
  },
  
  

];

// 判断路由是否存在
const existsRoute_inner = (path, theRoutes)=>{
  for (let i = 0; i < theRoutes.length; i++) {
      const r = theRoutes[i];
      if (r.path == path) {
          return true;
      }
      if (r.children && r.children.length) {
          const existsInChildren = existsRoute_inner(path,r.children);
          if(existsInChildren) return true; 
      }
  }
  return false;
};

export const existsRoute = (path) => {

  return existsRoute_inner(path,routes);

};

export default routes;