<!-- Navbar top -->
<nav class="flq-navbar flq-navbar-top flq-navbar-top-cloud flq-navbar-top-fixed">
    <div class="flq-navbar-container container-fluid">
        @livewire('torrent-stats',['hash'=>$hash,'movie'=>$movie])
    </div>
</nav>
<!-- / Navbar top -->

<div class="content-wrap">
    @yield('contents')
</div>