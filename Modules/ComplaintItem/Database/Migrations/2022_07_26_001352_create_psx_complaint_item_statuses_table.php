<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Modules\Core\Entities\Module;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('psx_reported_item_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->timestamp('added_date');
            $table->foreignId('added_user_id');
            $table->timestamp('updated_date')->nullable();
            $table->foreignId('updated_user_id')->nullable();
            $table->smallInteger('updated_flag')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('psx_reported_item_statuses');
    }
};
