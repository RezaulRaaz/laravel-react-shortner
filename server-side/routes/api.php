<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShortUrlController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------*/


Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);
Route::group(['middleware' => 'api'], function ($router) {
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
    Route::post('create_short_url', [ShortUrlController::class,'create_short_url']);
    Route::get('short_url_list/{user_id}', [ShortUrlController::class,'short_url_list']);
});
