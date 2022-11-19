<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Lib\Yts;
use App\Lib\Min;


class Home extends Controller
{
    public function show(){
        return Min::output(view('index', ['topDownloadedMovies'=>Yts::getTopDownloadedMovies(1,7)]));
    }
}
