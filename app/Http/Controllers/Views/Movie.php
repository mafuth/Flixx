<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Lib\Yts;
use App\Lib\Min;


class Movie extends Controller
{
    public function show($id){
        return Min::output(view('movie', ['movie'=>Yts::getMovieInfo($id)]));
    }
}
