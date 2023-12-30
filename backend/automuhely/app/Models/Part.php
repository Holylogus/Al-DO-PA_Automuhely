<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    use HasFactory;
    protected $primaryKey = 'cikkszam';
    public $incrementing = false;
    protected $fillable = [
        'cikkszam',
        'megnevezes',
        'listaar',
        'beszallito'
    ];
}
