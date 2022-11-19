@foreach ($movies as $movie)
<div class="swiper-slide">
    <div class="card flq-card-blog">
        <div class="card-img-wrap">
            <a href="{{ route('movie',array('id'=>$movie['imdb_code'])) }}">
                <span class="flq-image flq-rounded-xl flq-responsive flq-responsive-sm-3x4">
                    <img src="{{ $movie['large_cover_image'] }}" onerror="this.src='https://via.placeholder.com/375X563?text=No%20Image%20Found'" alt="">
                </span>
                <span class="card-badge badge badge-dark badge-glass flq-color-white">{{ $movie['rating'] }}</span>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title"><a href="{{ route('movie',array('id'=>$movie['imdb_code'])) }}">{{ $movie['title_english'] }}</a></h5>
            <div class="flq-meta flq-meta-sm">
                <ul>
                    <li>
                        <a href="" class="card-year">{{ $movie['year'] }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
@endforeach