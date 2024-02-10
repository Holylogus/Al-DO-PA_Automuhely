<?php

namespace App\Http\Controllers;

use App\Models\Dolgozo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class DolgozoController extends Controller
{
    public function index()
    {
        $dolgozok = response()->json(Dolgozo::all());
        return $dolgozok;
    }

    public function show($id)
    {
        $Dolgozo = response()->json(Dolgozo::findOrFail($id));
        return $Dolgozo;
    }

    public function store(Request $request)
    {
        
        $Dolgozo = new Dolgozo();
        $Dolgozo->adoszam = $request->adoszam;
        $Dolgozo->nev = $request->nev;
        $Dolgozo->email = $request->email;
        $Dolgozo->password = Hash::make($request->password);
        $Dolgozo->jogosultsag = $request->jogosultsag;
        $Dolgozo -> szuletett = $request -> szuletett;
        $Dolgozo -> lakcim = $request -> szuletett;
        $Dolgozo -> pozicio = $request -> szuletett;
        $Dolgozo->save();

        $Dolgozo->save();
    }

    public function update(Request $request, $id)
    {
        $Dolgozo = Dolgozo::findOrFail($id);
        if ($request->adoszam !== NULL) {
        $Dolgozo->adoszam = $request->adoszam;}
        if ($request->vezeteknev !== NULL) {
        $Dolgozo->vezeteknev = $request->vezeteknev;}
        if ($request->keresztnev !== NULL) {
        $Dolgozo->keresztnev = $request->keresztnev;}
        if ($request->szuletett !== NULL) {
        $Dolgozo->szuletett = $request->szuletett;}
        if ($request->lakcim !== NULL) {
        $Dolgozo->lakcim = $request->lakcim;}
        if ($request->pozicio !== NULL) {
        $Dolgozo->pozicio = $request->pozicio;}
        $Dolgozo->password = Hash::make($request->password);
        $Dolgozo->save();
    }

    public function destroy($id)
    {
        Dolgozo::findOrFail($id)->delete();
    }
}
