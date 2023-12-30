<?php

namespace App\Http\Controllers;

use App\Models\Worker;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    public function index()
    {
        $workers = response()->json(Worker::all());
        return $workers;
    }

    public function show($id)
    {
        $worker = response()->json(Worker::find($id));
        return $worker;
    }

    public function store(Request $request)
    {
        $worker = new Worker();
        $worker->adoszam = $request->adoszam;
        $worker->vezeteknev = $request->vezeteknev;
        $worker->keresztnev = $request->keresztnev;
        $worker->szuletett = $request->szuletett;
        $worker->lakcim = $request->lakcim;
        $worker->pozicio = $request->pozicio;
        $worker->save();
    }

    public function update(Request $request, $id)
    {
        $worker = Worker::find($id);
        $worker->adoszam = $request->adoszam;
        $worker->vezeteknev = $request->vezeteknev;
        $worker->keresztnev = $request->keresztnev;
        $worker->szuletett = $request->szuletett;
        $worker->lakcim = $request->lakcim;
        $worker->pozicio = $request->pozicio;
        $worker->save();
    }

    public function destroy($id)
    {
        Worker::find($id)->delete();
    }
}
