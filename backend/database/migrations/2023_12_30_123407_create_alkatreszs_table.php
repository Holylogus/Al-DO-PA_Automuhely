<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('alkatreszs', function (Blueprint $table) {
            $table->id('azonosito');
            $table->string('megnevezes');
            $table->bigInteger('listaar');
            $table->string('beszallito');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alkatreszs');
    }
};
