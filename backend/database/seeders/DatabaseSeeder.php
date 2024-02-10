<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Munkalap;
use App\Models\Alkatresz;
use App\Models\Dolgozo;
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
        Dolgozo::factory(10)->create();
        Alkatresz::factory(30)->create();
        Munkalap::factory(10)->create();
        Munkalaptetel::factory(5)->create();
    }
}
