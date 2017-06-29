const elixir = require('laravel-elixir');

require('laravel-elixir-webpack-react');


elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
//     mix.browserSync({
//   proxy: 'http://localhost/laravel-react-test/public', // edit proxy server for development here
  
//  });


});
