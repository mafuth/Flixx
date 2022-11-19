<ul class="nav nav-parent flex-grow-1 flq-navbar-nav justify-content-start d-flex">
    <li class="nav-item">
        <a href="#" wire:click="removeTorrent" class="nav-link">
            <span class="nav-link-name">Back</span>
        </a>
    </li>
    <li class="nav-item" wire:poll.visible.1s>
        <a href="#" class="nav-link">
            <span class="nav-link-name">{{ $torrentStats['speed']['down'] }} B/s</span>
        </a>
    </li>
</ul>