<?php

namespace Database\Factories;

use App\Models\Alkatresz;
use App\Models\Dolgozo;
use App\Models\Feladat;
use App\Models\Munkalap;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MunkalapTetel>
 */
class MunkalapTetelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'munkalapszam'=>fake()->randomElement(Munkalap::all()),
            'feladat'=>fake()->randomElement(Feladat::all()),
            'szerelo'=>function(){
                return User::where('jogosultsag', 'szerelo')->inRandomOrder()->first()->id;
            },
            'javCsere'=>fake()->boolean(),
            'alkatresz'=>fake()->randomElement(Alkatresz::all()),
            'mennyiség'=>fake()->numberBetween(0,0),
            'alkatreszAra'=>fake()->numberBetween(10000,120000),
            'alkatreszRendelesiIdo'=>fake()->date(),
            'alkatreszErkezesiIdo'=>fake()->date(),
            'munkaKezdesiIdo'=>fake()->date(),
            'munkaBefejezesiIdo'=>fake()->date()




        ];
    }
}
