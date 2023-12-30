<?php

namespace Database\Factories;

use App\Models\Worker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Worker>
 */
class WorkerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'vezeteknev' => fake('hu_HU')->lastName(),
            'keresztnev' => fake('hu_HU')->lastName(),
            'szuletett' => fake('hu_HU')->dateTimeBetween('1960-01-01', '2004-01-01'),
            'lakcim' => fake('hu_HU')->address(),
            'pozicio' => fake()->randomElement(Worker::$poziciok),
        ];
    }
}
