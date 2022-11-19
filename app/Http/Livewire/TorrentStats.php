<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Lib\TorrentApi;

class TorrentStats extends Component
{
    public $hash;
    public $movie;
    
    public function mount($hash,$movie)
    {
        $this->hash = $hash;
        $this->movie = $movie;
    }

    public function removeTorrent(){
        TorrentApi::removeTorrent($this->hash);
        
        return redirect()->to('/movie/'.$this->movie['imdb_code']);
    }

    public function render(){
        return view('livewire.torrent-stats',['torrentStats'=>TorrentApi::getTorrentStats($this->hash)]);
    }
}
