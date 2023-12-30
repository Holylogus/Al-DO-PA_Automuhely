<?php

namespace App\Http\Controllers;

use App\Models\Part;
use Illuminate\Http\Request;

class PartController extends Controller
{
    public function index()
    {
        $parts = response()->json(Part::all());
        return $parts;
    }

    public function show($id)
    {
        $part = response()->json(Part::find($id));
        return $part;
    }

    public function store(Request $request)
    {
        $part = new Part();
        $part->cikkszam = $request->cikkszam;
        $part->megnevezes = $request->megnevezes;
        $part->listaar = $request->listaar;
        $part->beszallito = $request->beszallito;
        $part->save();
    }

    public function update(Request $request, $id)
    {
        $part = Part::find($id);
        if ($request->cikkszam !== NULL) {
        $part->cikkszam = $request->cikkszam;}
        if ($request->megnevezes !== NULL) {
        $part->megnevezes = $request->megnevezes;}
        if ($request->listaar !== NULL) {
        $part->listaar = $request->listaar;}
        if ($request->beszallito !== NULL) {
        $part->beszallito = $request->beszallito;}
        $part->save();
    }

    public function destroy($id)
    {
        Part::find($id)->delete();
    }
}
