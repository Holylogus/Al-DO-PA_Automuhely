<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('rendeles_szam', '=', $this->getAttribute('rendeles_szam'))
            ->where('alkatresz', '=', $this->getAttribute('alkatresz'));
        return $query;
    }

    protected $fillable = [
        'mennyiseg',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
