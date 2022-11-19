# FLIXX

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

<!-- CONTRIBUTING -->
# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

### Todo

- [ ] Fix page expired alert bug on movie page
- [ ] Add automated series collection
- [ ] Add loggin and users

### Done ✓

- [x] Add automated movies collection
- [x] Add torrent based streaming

