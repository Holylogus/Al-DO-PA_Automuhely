<?php

namespace Database\Factories;

use App\Models\Dolgozo;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Worker>
 */
class DolgozoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected static ?string $password;

    public function definition(): array
    {
        return [
            'adoszam'=>fake()->numerify('########'),
            'nev' => fake('hu_HU')->name(),
            'szuletesiIdo' => fake('hu_HU')->dateTimeBetween('1960-01-01', '2004-01-01'),
            'lakcim' => fake('hu_HU')->address(),
            'pozicio' =>fake()->randomElement(Dolgozo::$poziciok),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }
    protected $casts = [
        'password' => 'hashed',
    ];
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
