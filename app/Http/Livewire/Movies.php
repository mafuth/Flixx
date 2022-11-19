<?php

namespace App\Http\Livewire;

use Livewire\Component;

use App\Lib\Yts;

class Movies extends Component
{
    public $page = 1;
    public $shownMovies = array();
    protected $gernre;
    protected $search;

    protected $listeners = [
        'load-more' => 'loadMore'
    ];
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function loadMore()
    {
        $this->page += 1;
    }
  
    public function mount($gernre,$search)
    {
        $this->gernre = $gernre;
        $this->search = $search;
    }
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function render()
    {
        if($this->search){
            if($this->gernre == "All"){
                $movies = Yts::filterMovies($this->page,50,'','year',$this->search);
            }else{
                $movies = Yts::filterMovies($this->page,50,$this->gernre,'year',$this->search);
            }
        }else{
            if($this->gernre == "All"){
                $movies = Yts::getMovies($this->page,50);
            }else{
                $movies = Yts::filterMovies($this->page,50,$this->gernre,'year','');
            }
        }

        foreach($movies as $movie){
            if(!in_array($movie,$this->shownMovies)){
                array_push($this->shownMovies,$movie);
            }
        }
        $this->emit('loaded', $this->page);

        return view('livewire.movies',['movies'=>$this->shownMovies,'search'=>$this->search]);
    }
}
