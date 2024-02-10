<?php

namespace App\Http\Controllers;

use App\Models\Munkalap;
use Illuminate\Http\Request;

class MunkalapController extends Controller
{
    public function index()
    {
        $munkalapok = response()->json(Munkalap::all());
        return $munkalapok;
    }

    public function show($id)
    {
        $Munkalap = response()->json(Munkalap::find($id));
        return $Munkalap;
    }

    public function store(Request $request)
    {
        $Munkalap = new Munkalap();
        $Munkalap->fill($request->all());
        $Munkalap->save();
    }

    public function update(Request $request, $id)
    {
        $Munkalap = Munkalap::find($id);
        if ($request->kelt !== NULL) {
        $Munkalap->kelt = $request->kelt;}
        if ($request->osszeg !== NULL) {
        $Munkalap->osszeg = $request->osszeg;}
        $Munkalap->save();
    }

    public function destroy($id)
    {
        Munkalap::find($id)->delete();
    }
}
