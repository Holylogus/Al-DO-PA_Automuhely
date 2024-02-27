<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;


use App\Models\Alkatresz;
use App\Models\Auto;
use App\Models\Feladat;
use App\Models\Munkalap;
use App\Models\MunkalapTetel;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->tryToSeed(User::class, 10);
        $this->tryToSeed(Alkatresz::class, 10);
        $this->tryToSeed(Feladat::class, 15);
        $this->tryToSeed(Auto::class, 10);
        $this->tryToSeed(Munkalap::class, 10);
        $this->tryToSeed(MunkalapTetel::class, 5);
    }


    private function tryToSeed(string $modelClass, int $timesForCreate): void
    {
        DB::beginTransaction();
        try {
            $modelClass::factory($timesForCreate)->create();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            echo "Failed to seed {$modelClass}: {$th->getMessage()}\n";
        }
    }
}

