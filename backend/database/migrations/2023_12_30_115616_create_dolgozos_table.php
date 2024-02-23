<?php

use App\Models\Dolgozo;
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
        Schema::create('dolgozos', function (Blueprint $table) {
            $table->id('dolgozoAzonosito');
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

        DB::update('ALTER TABLE dolgozos AUTO_INCREMENT = 10');

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

            Dolgozo::create(
                [
                    'adoszam' => 23435678,
                    'nev' => 'Pálinkás Zoltán',
                    'szuletesiIdo' => '1996-09-02 17:00',
                    'lakcim' => '2345 Kukutyin Avar utca 12.',
                    'pozicio' => 'szerelo',
                    'email'=> 'p.zoltan@gmail.com',
                    'password' => 'dolgozo',
                ]
                );
                Dolgozo::create(
                    [
                        'adoszam' => 14465268,
                        'nev' => 'Mayer Zsolt',
                        'szuletesiIdo' => '1998-07-26 08:00',
                        'lakcim' => '1105 Budapest Kókány Jenő utca 14.',
                        'pozicio' => 'szerelo',
                        'email'=> 'm.zsolt@gmail.com',
                        'password' => 'dolgozo',
                    ]
                    );
                    Dolgozo::create(
                        [
                            'adoszam' => 25687912,
                            'nev' => 'Nap Anikó',
                            'szuletesiIdo' => '1997-11-12 11:00',
                            'lakcim' => '1026 Budapest Petőfi Sándor utca 17.',
                            'pozicio' => 'recepciós',
                            'email'=> 'n.aniko@gmail.com',
                            'password' => 'dolgozo',
                        ]
                        );
                        Dolgozo::create(
                            [
                                'adoszam' => 17548672,
                                'nev' => 'Giliszta Dávid',
                                'szuletesiIdo' => '1995-11-04 11:00',
                                'lakcim' => '2343 Tápószele Gerle utca 8.',
                                'pozicio' => 'vezetoszerelo',
                                'email'=> 'g.david@gmail.com',
                                'password' => 'dolgozo',
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
