<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Worker extends Model
{
    use HasFactory;

    protected $primaryKey = 'adoszam';

    public $incrementing = false;

    protected $fillable = [
        'adoszam',
        'vezeteknev',
        'keresztnev',
        'szuletett',
        'lakcim',
        'pozicio',
    ];

    public static $poziciok = ['szerelo', 'reszmunkaidos'];

    // protected $hidden = [

    // ];
}
