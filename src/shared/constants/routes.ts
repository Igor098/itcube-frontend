export const ROUTES = {
  home: {
    path: '/',
    route: '/',
    name: 'Home Page',
  },
  login: {
    path: '/login',
    route: '/login',
    name: 'Login Page',
  },
  register: {
    path: '/register',
    route: '/register',
    name: 'Register Page',
  },
  management: {
    path: '/management',
    route: '/management',
    name: 'Management Page',
  },
  teacher: {
    path: '/teacher',
    route: '/teacher',
    name: 'Teacher Page',
  },
  profile: {
    path: '/profile',
    route: '/profile',
    name: 'Profile Page',
  },
};

export const PRIVATE_ROUTES = ['/management', '/teacher', '/profile'];
