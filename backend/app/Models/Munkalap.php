<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Munkalap extends Model
{
    use HasFactory;
    protected $primaryKey = 'munkalapSzam';
    protected $fillable = [
        'kocsi',
        'erkezesiIdo',
        'leiras',
        'ugyfel',
        'munkavezeto',
        'kesz',
        'osszeg',
        'elvitelIdeje'
    ];
}
