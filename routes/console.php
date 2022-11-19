<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/
use App\Lib\TorrentApi;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('clearTorrents', function () {
    $torrents = TorrentApi::getTorrents();
    foreach($torrents as $torrent){
        TorrentApi::removeTorrent($torrent['infoHash']);
    }
    $this->comment('Torrent files cache cleared');
});
