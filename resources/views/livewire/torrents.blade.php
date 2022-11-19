<div class="container-small flq-vertical-rhythm">
    <table class="table d-none d-lg-block">
        <tbody>
            @foreach ($movie['torrents'] as $torrent)
                @if($torrent['peers'] != 0)
                    <tr>
                        <td class="flq-color-meta">{{ $torrent['quality'].' '.$torrent['type'] }}</td>
                        <td class="flq-color-meta">{{ $torrent['peers'] }} peers</td>
                        <td class="flq-color-meta">{{ $torrent['size'] }}</td>
                        <td wire:loading.remove>
                            <button wire:click="addTorrent('{{ $movie['imdb_code'] }}','{{ $torrent['hash'] }}')" class="btn btn-icon-sm">
                                <span class="btn-name">Watch Now</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 19L19 12L8 5V19Z" fill="currentColor" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                @endif
            @endforeach
        </tbody>
    </table>
    <table class="table d-block d-lg-none">
        <tbody>
            @foreach ($movie['torrents'] as $torrent)
                @if($torrent['peers'] != 0)
                    <tr>
                        <td class="flq-color-meta">{{ $torrent['quality'].' '.$torrent['type'] }}</td>
                        <td wire:loading.remove>
                            <button wire:click="addTorrent('{{ $movie['imdb_code'] }}','{{ $torrent['hash'] }}')" class="btn btn-icon-sm">
                                <span class="btn-name">Watch</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 19L19 12L8 5V19Z" fill="currentColor" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                @endif
            @endforeach
        </tbody>
    </table>
</div>