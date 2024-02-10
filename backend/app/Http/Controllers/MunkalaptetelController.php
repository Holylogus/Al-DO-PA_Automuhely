<?php

namespace App\Http\Controllers;

use App\Models\Munkalaptetel;
use Illuminate\Http\Request;

class MunkalaptetelController extends Controller
{
    public function index()
    {
        $ois = response()->json(Munkalaptetel::all());
        return $ois;
    }

    public function show($rendeles_szam, $alkatresz)
    {
        $oi = Munkalaptetel::where('rendeles_szam', $rendeles_szam)
            ->where('alkatresz', $alkatresz)
            ->first();
        return $oi;
    }
    public function store(Request $request)
    {
        $oi = new Munkalaptetel();
        $oi->fill($request->all());
        $oi->save();
    }

    public function update(Request $request, $rendeles_szam, $alkatresz)
    {
        $oi = $this->show($rendeles_szam, $alkatresz);
        if ($request->rendeles_szam !== NULL) {
        $oi->rendeles_szam = $request->rendeles_szam;}
        if ($request->alkatresz !== NULL) {
        $oi->alkatresz = $request->alkatresz;}
        if ($request->mennyiseg !== NULL) {
        $oi->mennyiseg = $request->mennyiseg;}
        $oi->save();
    }


    public function destroy($rendeles_szam, $alkatresz)
    {
        $this->show($rendeles_szam, $alkatresz)->delete();
    }
}
