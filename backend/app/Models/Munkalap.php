<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Munkalap extends Model
{
    use HasFactory;

    protected $primaryKey = 'rendeles_szam';

    protected $fillable = [
        'kelt',
        'osszeg',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}