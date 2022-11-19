<?php

namespace App\Http\Livewire;

use Livewire\Component;

use App\Lib\TorrentApi;

class Torrents extends Component
{
    public $movie;

    public function addTorrent($id,$hash){
        $torrents = [];
        $torrents = TorrentApi::getTorrents();
        if(!in_array($hash,$torrents)){
            TorrentApi::addTorrent($hash);
            while(true){
                if(!empty(TorrentApi::getStream($hash))){
                    break;
                }else{
                    sleep(1);
                }
            }
        }
        return redirect()->to('/watch/'.$id.'/'.$hash);
    }

    public function mount($movie)
    {
        $this->movie = $movie;
    }

    public function render()
    {
        return view('livewire.torrents',['movie'=>$this->movie]);
    }
}
