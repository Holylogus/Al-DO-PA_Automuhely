<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('munkalap_tetels', function (Blueprint $table) {
            $table->id('munkalapszam');
            $table->foreignId('feladat')->references('kod')->on('feladats');
            $table->unique(['munkalapszam','feladat']);
            $table->foreignId('szerelo')->references('dolgozoAzonosito')->on('dolgozos');
            $table->boolean('javCsere')->nullable();
            $table->foreignId('alkatresz')->references('azonosito')->on('alkatreszs');
            $table->integer('mennyiség')->nullable();
            $table->integer('alkatreszAra')->nullable();
            $table->date('alkatreszRendelesiIdo')->nullable();
            $table->date('alkatreszErkezesiIdo')->nullable();
            $table->date('munkaKezdesiIdo')->nullable();
            $table->date('munkaBefejezesiIdo')->nullable();
            $table->timestamps();
        });

        DB::update('ALTER TABLE munkalap_tetels AUTO_INCREMENT = 1000');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('munkalap_tetels');
    }
};
