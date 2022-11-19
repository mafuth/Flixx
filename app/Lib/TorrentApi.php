<?php
namespace App\Lib;

use Illuminate\Support\Facades\Http;

class TorrentApi{
    public static function getTorrents(){
        return Http::acceptJson()->get(config('torrent.endpoint').'/'.config('torrent.apiKey').'/torrents')->throw()->json();
    }

    public static function getTorrentInfo($hash){
        $hash = strtolower($hash);
        return Http::acceptJson()->get(config('torrent.endpoint').'/'.config('torrent.apiKey').'/torrents/'.$hash)->throw()->json();
    }

    public static function getStream($hash){
        $hash = strtolower($hash);
        $response = Http::acceptJson()->get(config('torrent.endpoint').'/'.config('torrent.apiKey').'/torrents/'.$hash)->throw()->json();
        $videoTypes = array('mp4','mkv','avi');
        if(!empty($response['files'])){
            foreach($response['files'] as $file){
                $ext = pathinfo($file['stream'], PATHINFO_EXTENSION);
                if(in_array($ext,$videoTypes)){
                    return $file['stream'];
                    break;
                }
            }
        }
    }

    public static function getSubs($hash){
        $hash = strtolower($hash);
        $response = Http::acceptJson()->get(config('torrent.endpoint').'/'.config('torrent.apiKey').'/torrents/'.$hash)->throw()->json();
        $subTypes = array('srt');
        if(!empty($response['files'])){
            foreach($response['files'] as $file){
                $ext = pathinfo($file['link'], PATHINFO_EXTENSION);
                if(in_array($ext,$subTypes)){
                    return $file['link'];
                    break;
                }
            }
        }
    }

    public static function addTorrent($hash){
        $hash = strtolower($hash);
        Http::post(config('torrent.endpoint').'/'.config('torrent.apiKey').'/torrents', [
            'link' => $hash
        ]);
    }

    public static function removeTorrent($hash){
        $hash = strtolower($hash);
        Http::delete(config('torrent.endpoint').'/'.config('torrent.apiKey').'/torrents/'.$hash);
    }

    public static function getTorrentStats($hash){
        $hash = strtolower($hash);
        $response = Http::get(config('torrent.endpoint').'/'.config('torrent.apiKey').'/torrents/'.$hash.'/stats');
        return json_decode($response,true);
    }
}