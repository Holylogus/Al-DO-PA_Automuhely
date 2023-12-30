<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    public function index()
    {
        $ois = response()->json(OrderItem::all());
        return $ois;
    }

    public function show($rendeles_szam, $alkatresz)
    {
        $oi = OrderItem::where('rendeles_szam', $rendeles_szam)
            ->where('alkatresz', $alkatresz)
            ->first();
        return $oi;
    }
    public function store(Request $request)
    {
        $oi = new OrderItem();
        $oi->rendeles_szam = $request->rendeles_szam;
        $oi->alkatresz = $request->alkatresz;
        $oi->mennyiseg = $request->mennyiseg;
        $oi->save();
    }

    public function update(Request $request, $rendeles_szam, $alkatresz)
    {
        $oi = $this->show($rendeles_szam, $alkatresz);
        $oi->rendeles_szam = $request->rendeles_szam;
        $oi->alkatresz = $request->alkatresz;
        $oi->mennyiseg = $request->mennyiseg;
        $oi->save();
    }


    public function destroy($rendeles_szam, $alkatresz)
    {
        $this->show($rendeles_szam, $alkatresz)->delete();
    }
}
