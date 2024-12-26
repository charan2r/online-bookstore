<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BookController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//auth routes
Route::post('/register', [RegisteredUserController::class, 'storeAPI']);
Route::post('/login', [RegisteredUserController::class, 'loginAPI']);

//data for the home page
Route::get('/home', [BookController::class,'showBooks']);

//data of the {id} book
Route::get('/book-info/{id}', [BookController::class,'getBookInfo']);

//search route
Route::post('/search',[BookController::class,'searchBooks']);