<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\PartController;
use App\Http\Controllers\WorkerController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('workers', WorkerController::class);
Route::resource('parts', PartController::class);
Route::resource('orders', OrderController::class);
Route::get('orderitems', [OrderItemController::class, 'index']);
Route::get('orderitems/{rendeles_szam}/{alkatresz}', [OrderItemController::class, 'show']);
Route::post('orderitems', [OrderItemController::class, 'store']);
Route::put('orderitems/{rendeles_szam}/{alkatresz}', [OrderItemController::class, 'update']);
Route::delete('orderitems/{rendeles_szam}/{alkatresz}', [OrderItemController::class, 'destroy']);
