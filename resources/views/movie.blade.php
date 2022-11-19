@extends('layout.app')
@section('header')
<div class="py-7 min-vh-100 flq-background d-flex align-items-center">
    <div class="flq-background-image">
        <span class="flq-image jarallax" data-speed=0.7>
            <img src="{{ $movie['background_image_original'] }}" onerror="this.src='https://via.placeholder.com/375X563?text=No%20Image%20Found'" class="jarallax-img" alt="">
        </span>
    </div>
    <div class="flq-background-overlay" style="background-color: hsla(var(--flq-color-black), 0.8);"></div>
    <div class="container pt-navbar" data-sr="movie" data-sr-interval="70" data-sr-duration="1200" data-sr-distance="10">
        <div class="row gy-6 gx-6">
            <div class="col-12 col-lg-6 col-xl-5 col-xxl-4" data-sr data-sr-duration="1600" data-sr-distance="10">
                <div class="card flq-card-image flq-card-favorites h-lg-100">
                    <a href="{{ $movie['large_cover_image'] }}" class="card-image" data-fancybox>
                        <span class="flq-image flq-responsive flq-responsive-lg-3x4">
                            <img src="{{ $movie['large_cover_image'] }}" onerror="this.src='https://via.placeholder.com/375X563?text=No%20Image%20Found'" alt="">
                        </span>
                        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 20H16M4 8V4V8ZM4 4H8H4ZM4 4L9 9L4 4ZM20 8V4V8ZM20 4H16H20ZM20 4L15 9L20 4ZM4 16V20V16ZM4 20H8H4ZM4 20L9 15L4 20ZM20 20L15 15L20 20ZM20 20V16V20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    @if($movie['yt_trailer_code'])
                        <div class="card-body">
                            <a href="https://www.youtube.com/watch?v={{ $movie['yt_trailer_code'] }}" class="btn btn-dark btn-glass btn-block" data-fancybox>
                                <span class="btn-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 19L19 12L8 5V19Z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span class="btn-name">Trailer</span>
                            </a>
                        </div>
                    @endif
                </div>
            </div>
            <div class="col-12 col-lg-6 py-lg-2 flq-vertical-rhythm">

                @foreach ($movie['genres'] as $genre)
                    <a class="flq-subtitle badge badge-white badge-translucent" href="{{ route('movies',array('gernre'=>$genre)) }}" data-sr-item="movie">{{ $genre }}</a>
                @endforeach
                <h1 class="mb-0" data-sr-item="movie">{{ $movie['title_english'] }}</h1>
                <div class="mt-3">
                    <div class="row gy-1 flq-color-opacity">
                        <div class="col-auto" data-sr-item="movie">
                            <div class="d-flex align-items-center">
                                <svg width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M43 1.89083C42.8833 0.922265 42.1751 0.150295 41.2733 0C37.3203 0 5.69694 0 1.74393 0C0.756052 0.164717 0 1.07484 0 2.17169C0 3.935 0 18.0384 0 19.801C0 21.0155 0.925061 22 2.06699 22C5.95494 22 37.0623 22 40.9502 22C42.0017 22 42.8699 21.1643 43 20.0826C43 16.4444 43 3.70955 43 1.89083Z" fill="#F6C700" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2105 15.7931C34.4184 15.7931 34.6936 15.7074 34.7565 15.5381C34.7983 15.425 34.8297 15.0174 34.8514 14.3152V10.8987C34.8514 10.3347 34.8155 9.96654 34.7445 9.79423C34.6727 9.62193 34.3938 9.53615 34.1859 9.53615C33.9825 9.53615 33.8508 9.61206 33.791 9.76159C33.7304 9.91265 33.7005 10.2914 33.7005 10.8987V14.4223C33.7005 15.0083 33.7342 15.3825 33.803 15.5464C33.8718 15.7112 34.0071 15.7931 34.2105 15.7931ZM33.4852 17.5504H30.4131V4.21738H33.7005V8.55468C33.9727 8.23511 34.2764 7.99676 34.6106 7.83964C34.9457 7.68251 35.4482 7.60281 35.8408 7.60281C36.2925 7.60281 36.6844 7.67416 37.0164 7.81687C37.3484 7.95957 37.6019 8.1592 37.7762 8.41653C37.9504 8.67385 38.0551 8.9251 38.0903 9.1718C38.1254 9.4185 38.1434 9.94377 38.1434 10.7484V14.4891C38.1434 15.2891 38.0903 15.8842 37.9841 16.2759C37.8779 16.6668 37.6281 17.0069 37.2363 17.2938C36.8436 17.5815 36.3785 17.725 35.8393 17.725C35.4519 17.725 34.9516 17.6399 34.6174 17.4691C34.2816 17.2991 33.9757 17.0426 33.6975 16.701C33.6953 16.7098 33.6918 16.724 33.6869 16.7436C33.6602 16.8508 33.5933 17.1197 33.4852 17.5504ZM14.911 9.62588L15.0461 10.5624L15.8366 4.3335H20.2944V17.6665H17.315L17.3038 8.667L16.111 17.6665H13.982L12.7241 8.86284L12.7137 17.6665H9.72461V4.3335H14.1487C14.2789 5.14114 14.415 6.0877 14.5578 7.17544C14.5846 7.36349 14.7025 8.1806 14.911 9.62588ZM8.59885 4.42081H5.18652V17.7538H8.59885V4.42081ZM25.9279 7.10712C25.9653 7.27715 25.9847 7.66276 25.9847 8.26546V13.4347C25.9847 14.322 25.9279 14.8655 25.815 15.0659C25.7013 15.2663 25.3992 15.3658 24.9093 15.3658V6.61373C25.281 6.61373 25.5345 6.65396 25.6691 6.7329C25.8037 6.8126 25.8905 6.93709 25.9279 7.10712ZM27.4691 17.5306C27.8752 17.4403 28.2162 17.2809 28.4929 17.0539C28.7689 16.8262 28.9626 16.5112 29.0732 16.1081C29.1847 15.7058 29.2505 14.9065 29.2505 13.711V9.02908C29.2505 7.76751 29.2019 6.92191 29.1263 6.49228C29.0501 6.06189 28.8609 5.67097 28.558 5.32028C28.2544 4.96959 27.8117 4.71758 27.2298 4.56425C26.6473 4.41092 25.6975 4.3335 24.0456 4.3335H21.5V17.6665H25.634C26.5867 17.6361 27.1984 17.5913 27.4691 17.5306Z" fill="black" />
                                </svg>
                                <strong class="ms-1 flq-color-title">{{ $movie['rating'] }}</strong>
                            </div>
                        </div>
                        <div class="col-auto" data-sr-item="movie">
                            <a href="#" class="flq-color-meta flq-color-title-hover"><strong>{{ $movie['year'] }}</strong></a>
                        </div>
                        @if($movie['runtime'] != 0)
                            <div class="col-auto" data-sr-item="movie">
                                <a href="#" class="flq-color-meta flq-color-title-hover"><strong>{{ 'Around '.round(gmdate("H", $movie['runtime']*60)).' hour long' }}</strong></a>
                            </div>
                        @endif
                    </div>
                </div>
                <p class="lead" data-sr-item="movie">{{ $movie['description_intro'] }}</p>
            </div>
        </div>
    </div>
</div>
@endsection
@section('contents')

<div class="py-7 overflow-hidden flq-background flq-background-color-100">
    <div class="flq-background-shape">
        <div data-rellax="" data-rellax-speed="1" class="mt-auto" style="transform: translate3d(0px, 27px, 0px);">
            <svg class="flq-translate-y50 ms-n7" width="866" height="831" viewBox="0 0 866 831" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M323.654 829.93C224.153 816.108 227.515 661.483 166.991 581.373C117.182 515.444 16.5101 485.726 2.15912 404.394C-12.2526 322.718 48.441 248.437 96.2908 180.687C138.901 120.355 193.017 70.7174 259.952 39.3885C326.181 8.38988 399.582 -9.42614 471.263 5.18105C541.916 19.579 590.604 76.5775 649.113 118.693C724.145 172.702 839.74 196.401 861.604 286.155C883.301 375.219 810.521 461.538 749.243 529.731C697.595 587.206 611.836 589.844 548.676 634.395C465.428 693.116 424.619 843.956 323.654 829.93Z" fill="#fff" fill-opacity="0.02"></path>
            </svg>
        </div>
        <div data-rellax="" data-rellax-speed="-1" class="ms-auto" style="transform: translate3d(0px, -27px, 0px);">
            <svg class="flq-translate-yn50 mt-n7 ms-7" width="782" height="865" viewBox="0 0 782 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M755.116 831.212C680.566 911.828 543.954 812.208 434.284 816.447C344.028 819.936 254.487 891.671 172.561 853.73C90.2879 815.629 61.5615 714.78 30.6714 629.531C3.16372 553.617 -7.56424 474.065 6.13963 394.452C19.6991 315.678 49.5645 238.707 107.441 183.536C164.489 129.156 246.033 121.094 320.36 94.9246C415.677 61.3647 509.14 -27.5167 603.314 8.94621C696.764 45.1286 728.741 164.34 751.641 261.91C770.941 344.146 719.74 422.719 720.256 507.206C720.936 618.565 830.763 749.41 755.116 831.212Z" fill="#fff" fill-opacity="0.02"></path>
            </svg>
        </div>
    </div>
    @livewire('torrents',['movie'=>$movie])
</div>
@endsection