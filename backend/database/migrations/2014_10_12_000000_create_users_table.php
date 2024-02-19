<?php

use App\Models\User;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('vezetekNev');
            $table->string('keresztNev');
            $table->date('szuletesiIdo');
            $table->string('lakcím');
            $table->string('telefonszam')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            // 0: admin, 1: felhasználó
            $table->boolean('jogosultsag')->default(1);
            $table->string('api_token', 60)->nullable(); // specify the length also
            $table->rememberToken();
            $table->timestamps();
        });
        User::create(
            [
                'vezetekNev' => 'admin',
                'keresztNev' => 'admin',
                'szuletesiIdo' => '1994.10.14',
                'lakcím'=> '2354 Kukac Giliszta utca 14.',
                'telefonszam'=> '2354 Kukac Giliszta utca 14.',
                'email' => 'admin@gmail.com',
                'jogosultsag' => '0',
                'password' => 'admin',
            ]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
