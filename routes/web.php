<?php

use Illuminate\Support\Facades\Route;

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
use App\Http\Controllers\Views\Home;
use App\Http\Controllers\Views\Movie;
use App\Http\Controllers\Views\Movies;
use App\Http\Controllers\Views\Watch;

Route::middleware('guest')->group(function () {
    Route::get('/', [Home::class, 'show'])->name('home');

    Route::get('/movies/{gernre}', [Movies::class, 'show'])->name('movies');
    
    Route::get('/movie/{id}', [Movie::class, 'show'])->name('movie');

    Route::get('/watch/{id}/{hash}', [Watch::class, 'show'])->name('watch');
});



Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
