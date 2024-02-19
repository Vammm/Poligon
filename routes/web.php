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

Route::get('/', function () {
    return view('welcome');
})->name('home');
Route::get('/test', function () {
    return view('test');
})->name('test');

Route::get('/lang/{locale}/{pack}', function ($locale,$pack) {
    if (! in_array($locale, ['ru'])) {
        abort(400);
    }
    App::setLocale($locale);
    return response()->json(Lang::get($pack),210);
})->name('test');

Route::post('/login', [App\Http\Controllers\UserAuth::class, 'login']);
