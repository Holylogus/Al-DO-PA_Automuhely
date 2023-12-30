<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Part;
use App\Models\Worker;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Worker::factory(10)->create();
        Part::factory(30)->create();
        Order::factory(10)->create();
        OrderItem::factory(10)->create();
    }
}
