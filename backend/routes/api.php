<?php

use App\Http\Controllers\AutoController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


//User alap útvonalak
Route::get('/users',[UserController::class, 'index']);
Route::get('/users{id}',[UserController::class, 'show']);
Route::post('/users',[UserController::class, 'store']);
Route::post('/users{id}',[UserController::class, 'update']);
Route::delete('/users{id}',[UserController::class, 'destroy']);

//Auto alap útvonalak
Route::get('/auto',[AutoController::class, 'index']);
Route::get('/auto{id}',[AutoController::class, 'show']);
Route::post('/auto',[AutoController::class, 'store']);
Route::post('/auto{id}',[AutoController::class, 'update']);
Route::delete('/auto{id}',[AutoController::class, 'destroy']);

