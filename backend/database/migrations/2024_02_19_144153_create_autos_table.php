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
        Schema::create('autos', function (Blueprint $table) {
            $table->id('alvazszam');
            $table->date('erkezesiIdo');
            $table->string('rendszam');
            $table->foreignId('ugyfel')->references('id')->on('users');
            $table->primary(['alvazszam','erkezesiIdo']);
            $table->string('motorkod');
            $table->integer('gyartasiEv');
            $table->integer('gyartasiHo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('autos');
    }
};
