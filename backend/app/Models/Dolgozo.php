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
        'adoszam',
        'nev',
        'szuletesiIdo',
        'lakcim',
        'pozicio',
        'email',
        'password'
    ];

    protected $hidden = [
        'password',
        'created_at',
        'updated_at',
    ];

    public static $poziciok = ['admin','vezetoSzerelo', 'szerelo', 'recepcios'];
}
