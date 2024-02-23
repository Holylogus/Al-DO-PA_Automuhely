<?php

use App\Models\Dolgozo;
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
        Schema::create('dolgozos', function (Blueprint $table) {
            $table->id("dolgozoAzonosito");
            $table->bigInteger('adoszam');
            $table->string('nev');
            $table->date('szuletesiIdo');
            $table->string('lakcim');
            $table->string('pozicio');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Dolgozo::create(
            [
                'adoszam' => 77777777,
                'nev' => 'admin',
                'szuletesiIdo' => '2000-12-02 06:00',
                'lakcim' => '123 teszt...',
                'pozicio' => 'admin',
                'email'=> 'admin@gmail.com',
                'password' => 'admin',
            ]
            );
    }

    /*
     * Reverse the migrations.
     */

    public function down(): void
    {
        Schema::dropIfExists('dolgozos');
    }
};
