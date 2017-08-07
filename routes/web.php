<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Route::get('{slug}', 'Frontend\HomeController@index')
// ->where('slug', '(?!api)(?!global)(?!images)(?!test)(?!_admin)([A-z\d-\/_.]+)?');



Route::get('_admin', function() {
    return "admin page";
});


Route::get('/chat', function(){
    // echo 'chat';
    return view('chat');
});

Route::get('/test', 'TestController@test');

Route::get('/test_print', 'TestController@test_print');
