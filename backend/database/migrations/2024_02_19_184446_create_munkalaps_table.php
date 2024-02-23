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
        Schema::create('munkalaps', function (Blueprint $table) {
            $table->id('munkalapSzam');
            $table->foreignId('kocsi')->references('autoAzonosito')->on('autos');
            $table->date('erkezesiIdo');
            $table->string('leiras')->nullable();
            $table->foreignId('ugyfel')->references('id')->on('users');
            $table->foreignId('munkavezeto')->references('dolgozoAzonosito')->on('dolgozos');
            $table->boolean('kesz')->nullable();
            $table->integer('osszeg')->nullable();
            $table->date('elvitelIdeje')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('munkalaps');
    }
};
