<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Part;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $repeats = 10;
        do {
            $rendeles_szam = Order::all()->random()->id;
            $alkatresz = Part::all()->random()->alkatresz;

            $orderItem = OrderItem::where('rendeles_szam', $rendeles_szam)
                ->where('alkatresz', $alkatresz)
                ->get();
            $repeats--;
        } while ($repeats >= 0 && count($orderItem) > 0);

        return [
            'rendeles_szam' => $rendeles_szam,
            'alkatresz' => $alkatresz,
            'mennyiseg' => random_int(1, 4),
        ];
    }
}
