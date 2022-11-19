<?php
namespace App\Lib;


use Illuminate\Support\Facades\Http;

class Yts{
    private static $endPoint = "https://yts.mx/api/v2";

    public static function getMovies($page,$limit){
        $movies = Http::acceptJson()->get(self::$endPoint.'/list_movies.json?page='.$page.'&sort_by=year&limit='.$limit)->throw()->json()['data']['movies'];
        $checkedMovies = array();
        foreach($movies as $movie){
            foreach($movie['torrents'] as $torrent){
                if($torrent['peers'] != 0 && !in_array($movie,$checkedMovies)){
                    array_push($checkedMovies,$movie);
                }
            }
        }
        return $checkedMovies;
    }

    public static function filterMovies($page,$limit,$gernre,$sortBy,$search){
        $movies = Http::acceptJson()->get(self::$endPoint.'/list_movies.json?page='.$page.'&query_term='.urlencode($search).'&sort_by='.$sortBy.'&genre='.$gernre.'&limit='.$limit)->throw()->json()['data']['movies'];
        $checkedMovies = array();
        foreach($movies as $movie){
            foreach($movie['torrents'] as $torrent){
                if($torrent['peers'] != 0 && !in_array($movie,$checkedMovies)){
                    array_push($checkedMovies,$movie);
                }
            }
        }
        return $checkedMovies;
    }

    public static function getTopRatedMovies($page,$limit,$gernre){
        $movies = Http::acceptJson()->get(self::$endPoint.'/list_movies.json?sort_by=rating&page='.$page.'&limit='.$limit.'&genre='.$gernre)->throw()->json()['data']['movies'];
        $checkedMovies = array();
        foreach($movies as $movie){
            foreach($movie['torrents'] as $torrent){
                if($torrent['peers'] != 0 && !in_array($movie,$checkedMovies)){
                    array_push($checkedMovies,$movie);
                }
            }
        }
        return $checkedMovies;
    }

    public static function getTopDownloadedMovies($page,$limit){
        $movies = Http::acceptJson()->get(self::$endPoint.'/list_movies.json?sort_by=download_count&page='.$page.'&limit='.$limit)->throw()->json()['data']['movies'];
        $checkedMovies = array();
        foreach($movies as $movie){
            foreach($movie['torrents'] as $torrent){
                if($torrent['peers'] != 0 && !in_array($movie,$checkedMovies)){
                    array_push($checkedMovies,$movie);
                }
            }
        }
        return $checkedMovies;
    }

    public static function getMovieInfo($imdb_id){
        return Http::acceptJson()->get(self::$endPoint.'/movie_details.json?imdb_id='.$imdb_id)->throw()->json()['data']['movie'];
    }

    public static function getGernres(){
        return array(
            'All',
            'Comedy',
            'Sci-Fi',
            'Horror',
            'Romance',
            'Action',
            'Thriller',
            'Drama',
            'Mystery',
            'Crime',
            'Animation',
            'Adventure',
            'Fantasy'
        );
    }
}
