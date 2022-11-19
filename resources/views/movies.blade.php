@extends('layout.app')
@section('contents')
<div class="py-7">
    <div class="container flq-isotope">
        <nav>
            <ul class="nav nav-tabs justify-content-center text-center mb-5" data-sr="movie-options" data-sr-interval="80" data-sr-duration="1000" data-sr-distance="10">
                @foreach ($gernres as $tempGernre)
                    @if($gernre == $tempGernre)
                        <li class="nav-item">
                            <a href="{{ route('movies',array('gernre'=>$tempGernre)) }}" class="nav-link active"><span class="nav-link-name">{{ $tempGernre }}</span></a>
                        </li>
                    @else
                        <li class="nav-item">
                            <a href="{{ route('movies',array('gernre'=>$tempGernre)) }}" class="nav-link"><span class="nav-link-name">{{ $tempGernre }}</span></a>
                        </li>
                    @endif
                @endforeach
            </ul>
        </nav>
        @livewire('movies',['gernre'=>$gernre,'search'=>$search])
    </div>
</div>
@endsection