<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Lib\Yts;
use App\Lib\Min;
use Illuminate\Http\Request;

class Movies extends Controller
{
    public function show(Request $request, $gernre){
        return Min::output(view('movies',['gernre'=>$gernre,'gernres'=>Yts::getGernres(),'search'=>$request->input('q')]));
    }
}
