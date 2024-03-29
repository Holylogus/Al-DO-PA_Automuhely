<?php

namespace Database\Factories;

use App\Models\Auto;
use App\Models\Dolgozo;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Munkalap>
 */
class MunkalapFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'auto'=>fake()->randomElement(Auto::all()),
            'munkafelvetelIdeje'=>fake()->date('Y-m-d','now'),
            'leiras'=>fake()->sentence(10),
            'ugyfel'=>fake()->randomElement(User::all()),
            'munkavezeto' => function () {
                // Munkavezető kiválasztása, akinek a pozíciója 'vezetoSzerelo'
                return User::where('jogosultsag', 'vezetoSzerelo')->inRandomOrder()->first()->id;
            },
            'kesz'=>fake()->boolean(),
            'osszeg'=>fake()->numberBetween(10000,500000),
            'elvitelIdeje'=>fake()->date('Y-m-d','now')

        ];
    }
}
