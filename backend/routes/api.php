<?php

use App\Http\Controllers\MunkalapController;
use App\Http\Controllers\MunkalaptetelController;
use App\Http\Controllers\AlkatreszController;
use App\Http\Controllers\DolgozoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:basic')->get('/user', function (Request $request) {
    return $request->user();
});

require __DIR__ . '/auth.php';
Route::post('/login', [App\Http\Controllers\LoginController::class, 'login']);
Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout']);

//csak az admin éri el:
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout']);
    Route::resource('dolgozok', DolgozoController::class);
    Route::resource('alkatreszek', AlkatreszController::class);
    Route::resource('munkalapok', MunkalapController::class);
    Route::get('munkalaptetelek', [MunkalaptetelController::class, 'index']);
    Route::get('munkalaptetelek/{rendeles_szam}/{alkatresz}', [MunkalaptetelController::class, 'show']);
    Route::post('munkalaptetelek', [MunkalaptetelController::class, 'store']);
    Route::put('munkalaptetelek/{rendeles_szam}/{alkatresz}', [MunkalaptetelController::class, 'update']);
    Route::delete('munkalaptetelek/{rendeles_szam}/{alkatresz}', [MunkalaptetelController::class, 'destroy']);
});
