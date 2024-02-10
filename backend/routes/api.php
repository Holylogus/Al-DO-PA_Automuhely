<?php

use App\Http\Controllers\MunkalapController;
use App\Http\Controllers\MunkalaptetelController;
use App\Http\Controllers\AlkatreszController;
use App\Http\Controllers\DolgozoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth.basic')->group(function () {

    //csak az admin éri el:
    Route::middleware('auth.basic')->group(function () {
        Route::resource('dolgozok', DolgozoController::class);
        Route::resource('alkatreszek', AlkatreszController::class);
        Route::resource('munkalapok', MunkalapController::class);
        Route::get('munkalaptetelek', [MunkalaptetelController::class, 'index']);
        Route::get('munkalaptetelek/{rendeles_szam}/{alkatresz}', [MunkalaptetelController::class, 'show']);
        Route::post('munkalaptetelek', [MunkalaptetelController::class, 'store']);
        Route::put('munkalaptetelek/{rendeles_szam}/{alkatresz}', [MunkalaptetelController::class, 'update']);
        Route::delete('munkalaptetelek/{rendeles_szam}/{alkatresz}', [MunkalaptetelController::class, 'destroy']);
    });
});
