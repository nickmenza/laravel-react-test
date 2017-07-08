<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user', function (Request $request) {
    $user = DB::table('user')->get();
    return $user;
});

Route::post('/login', function (Request $request) {
    $username = $request->username;
    $password = $request->password;
    $t = DB::table('user')->select()->where('username',$username)->first();
    if(count($t)){
        $status = 200;
        $data = $t;
    }else{
        $status = 404;
        $data = '';
    }
    $result['status'] = $status;
    $result['data'] = $data;

    return response()->json($result); 
});