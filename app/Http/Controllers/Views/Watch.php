<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;

use App\Lib\Yts;
use App\Lib\Min;
use App\Lib\TorrentApi;
use Illuminate\Routing\UrlGenerator;


class Watch extends Controller
{
    protected $url;

    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    public function show($id,$hash){
        if(config('torrent.stream')){
            $host = config('torrent.stream');
        }else{
            $host = str_ireplace('.//','://',explode(':',str_ireplace('://','.//',$this->url->to('/')))[0]).':9000';
        }

        return Min::output(view('watch', ['movie'=>Yts::getMovieInfo($id),'stream'=>$host.TorrentApi::getStream($hash),'hash'=>$hash]));
    }
}
