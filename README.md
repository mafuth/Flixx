# Home cinema

## How to use

### Install dependencies

```sh
composer install && php artisan key:generate && cd torrent && npm install
```

### Start servers

```sh
php artisan serve --host 0.0.0.0 --port 8000
```


```sh
cd torrent && npm start
```

### CLear all torrent file cache

```sh
php artisan clearTorrents
```

## Setting the API
### To change torrent server apikey change this varible (from torrent/server/index.js ) value to any value you want

```JS
var apiKey = "...";
```

### add add the same key to you .env file in root directory and set the torrent server url
```sh
TORRENT_END_POINT = "..."
TORRENT_API_KEY = "..."
```

