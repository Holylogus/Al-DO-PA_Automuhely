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

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public static $alkatreszek = [
        'fék', 'gumiabroncs', 'motor', 'gyújtógyertya', 'porlasztó', 'lánctalp',
        'motorvezérlő egység', 'napellenző', 'üzemanyagszűrő', 'kormányberendezés', 'visszapillantó tükör',
        'nyári gumi', 'téli gumi', 'sebességváltó', 'klímaberendezés', 'zárrendszer', 'üzemanyag-szállító rendszer',
        'tengelykapcsoló', 'vonóhorog', 'kipufogó', 'szélvédő', 'elülső ablak', 'hátulsó ablak', 'fényszóró izzó',
        'jelzőizzó', 'led', 'műszerfal világítás', 'nappali menetfény', 'autó ülés', 'keréktárcsa', 'csapágy',
        'szivargyújtó', 'rugó'
    ];
}
