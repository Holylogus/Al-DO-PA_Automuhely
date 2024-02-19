<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Beszallito>
 */
class BeszallitoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'adoszam'=>fake()->numerify('########'),
            'nev'=>fake('HU_hu')->company(),
            'cim'=>fake('HU_hu')->address(),
            'tel'=>fake('HU-hu')->phoneNumber()
        ];
    }
}
