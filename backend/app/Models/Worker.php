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

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public static $poziciok = ['szerelo', 'reszmunkaidos'];
}
