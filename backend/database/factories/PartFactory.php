<?php

namespace Database\Factories;

use App\Models\Part;
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
            'megnevezes' =>fake()->array_rand(Part::$alkatreszek),
            'listaar'=>fake('hu_HU')->random_int(8999, 600000),
            'beszallito'=>fake('hu_HU')->company(),
        ];
    }
}
