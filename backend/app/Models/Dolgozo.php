<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dolgozo extends Model
{
    use HasFactory;

    protected $primaryKey = 'adoszam';

    public $incrementing = false;

    protected $fillable = [
        'nev',
        'szuletesiIdo',
        'lakcim',
        'jogosultsag',
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
    ];

    public static $poziciok = ['szerelo', 'reszmunkaidos'];
}
