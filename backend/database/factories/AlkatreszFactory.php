<?php

namespace Database\Factories;

use App\Models\Alkatresz;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Part>
 */
class AlkatreszFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        do {
            $megnevezes = fake()->randomElement(Alkatresz::$alkatreszek);
        } while (Alkatresz::where('megnevezes', $megnevezes)->exists());

        return [
            'megnevezes' => $megnevezes,
            'beszallito' => function () {
                return User::where('jogosultsag', 'beszallito')->inRandomOrder()->first()->id;
            },
        ];
    }
}
