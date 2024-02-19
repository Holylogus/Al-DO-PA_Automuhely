<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feladat extends Model
{
    use HasFactory;

    protected $primaryKey = 'kod';

    protected $fillable = [
        'megnevezes',
        'munkadij'
    ];

    public static $feladatTipusok = [
        'fékbetét csere', 'turbó csere', 'turbó javítás', 'motorgenerál', 'alváz javítás', 'futóműállítás',
        'karosszéria lakatozás', 'váltó javítás','váltó csere', 'ékszíj csere', 'olajcsere', 'légszűrő csere',
        'kuplunk javítás', 'kuplung csere', 'hűtő javítás', 'hűtő csere','akumulátor csere', 'vezérlés javítás','vezérlés csere',
        'kormánymű javítás','kormánymű csere',
    ];
}
