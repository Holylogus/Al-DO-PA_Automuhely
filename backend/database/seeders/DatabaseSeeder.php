<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Munkalap;
use App\Models\Alkatresz;
use App\Models\Auto;
use App\Models\Beszallito;
use App\Models\Dolgozo;
use App\Models\FeladatTipus;
use App\Models\Munkalaptetel;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Dolgozo::factory(5)->create();
        Alkatresz::factory(30)->create();
        FeladatTipus::factory(10)->create();
        Auto::factory(10)->create();
        Beszallito::factory(10)->create();
    }
}
