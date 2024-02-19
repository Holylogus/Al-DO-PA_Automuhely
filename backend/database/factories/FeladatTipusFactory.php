<?php

namespace Database\Factories;

use App\Models\Alkatresz;
use App\Models\FeladatTipus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FeladatTipus>
 */
class FeladatTipusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'megnevezes' => fake()->randomElement(FeladatTipus::$feladatTipusok),
            'munkadij' => fake()->numberBetween(3500,100000)
        ];
    }
}
