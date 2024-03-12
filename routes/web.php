<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/recovery', function () {
    return view('pages.recovery');
})->name('recovery');

Route::get('/login', function () {
    return view('pages.login');
})->name('login');

Route::get('/', function () {
    return view('pages.post');
})->name('post');

Route::get('/template', function () {
    return view('template');
})->name('template');

Route::post('/login', [App\Http\Controllers\UserAuth::class, 'login']);
