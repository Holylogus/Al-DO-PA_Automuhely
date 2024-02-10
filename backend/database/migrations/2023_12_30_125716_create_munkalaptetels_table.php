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
        Schema::create('munkalaptetels', function (Blueprint $table) {
            $table->primary(['rendeles_szam', 'alkatresz']);
            $table->foreignId('rendeles_szam')->references('rendeles_szam')->on('munkalaps');
            $table->foreignId('alkatresz')->references('cikkszam')->on('alkatreszs');
            $table->integer('mennyiseg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('munkalaptetels');
    }
};
