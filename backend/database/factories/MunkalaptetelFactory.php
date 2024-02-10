<?php

namespace Database\Factories;

use App\Models\Munkalap;
use App\Models\Munkalaptetel;
use App\Models\Alkatresz;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class MunkalaptetelFactory extends Factory
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
            $rendeles_szam = Munkalap::all()->random()->rendeles_szam;
            $alkatresz = Alkatresz::all()->random()->cikkszam;

            $orderItem = Munkalaptetel::where('rendeles_szam', $rendeles_szam)
                ->where('alkatresz', $alkatresz)
                ->get();
            $repeats--;
        } while ($repeats >= 0 && count($orderItem) > 0);

        return [
            'rendeles_szam' => $rendeles_szam,
            'alkatresz' => $alkatresz,
            'mennyiseg' => rand(1, 4),
        ];
    }
}
