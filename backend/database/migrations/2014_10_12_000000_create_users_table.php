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
            $table->string('nev');
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
                'nev' => 'admin',
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
