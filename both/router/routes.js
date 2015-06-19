Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/profile', {
  name: 'profile'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'profile']
});
