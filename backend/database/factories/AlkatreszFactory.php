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
        return [
            'megnevezes' => fake()->randomElement(Alkatresz::$alkatreszek),
            'listaar' => rand(8999, 600000),
            'beszallito' => fake()->randomElement(User::all()),
        ];
    }
}
