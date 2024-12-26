<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('admin/dashboard',[AdminController::class,'dashboard'])-> middleware(['auth','admin'])->name('admin.dashboard');

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/admin/books/{book}/edit', [AdminController::class, 'edit'])->name('admin.books.edit');
    Route::put('/admin/books/{book}', [AdminController::class, 'update'])->name('admin.books.update');
    Route::delete('/admin/books/{book}', [AdminController::class, 'destroy'])->name('admin.books.destroy');
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.books.dashboard');
});

Route::get('/admin/books/create', [BookController::class, 'create'])->name('books.create')->middleware('auth','admin');
Route::post('/books', [BookController::class, 'store'])->name('books.store');

Route::get('/admin/user/userview', [UserController::class, 'listUsers'])->name('user.userview')->middleware('auth','admin');
Route::get('/admin/users/{id}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
Route::delete('/admin/users/{id}', [UserController::class, 'deleteUser'])->name('admin.users.destroy');
Route::put('/admin/users/{id}', [UserController::class, 'update'])->name('admin.users.update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



