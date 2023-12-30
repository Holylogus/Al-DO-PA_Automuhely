<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Part>
 */
class PartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cikkszam'=>fake()->numberBetween(1000000000,9999999999),
            'megnevezes' =>fake()->words(),
            'listaar'=>fake()->money(),
            'beszallito'=>fake()->company()
        ];
    }
}
