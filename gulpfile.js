const elixir = require('laravel-elixir');

require('laravel-elixir-webpack-react');
require('laravel-elixir-livereload');

elixir(mix => {
    mix.sass('*.scss')
       .webpack('app.js')
       .livereload();
        

});
