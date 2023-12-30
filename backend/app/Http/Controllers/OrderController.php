<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $orders = response()->json(Order::all());
        return $orders;
    }

    public function show($id)
    {
        $order = response()->json(Order::find($id));
        return $order;
    }

    public function store(Request $request)
    {
        $order = new Order();
        $order->kelt = $request->kelt;
        $order->osszeg = $request->osszeg;

        $order->save();
    }

    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        if ($request->kelt !== NULL) {
        $order->kelt = $request->kelt;}
        if ($request->osszeg !== NULL) {
        $order->osszeg = $request->osszeg;}
        $order->save();
    }

    public function destroy($id)
    {
        Order::find($id)->delete();
    }
}
