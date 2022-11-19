<!-- Navbar top -->
<nav class="flq-navbar flq-navbar-top flq-navbar-top-cloud flq-navbar-top-fixed">
    <div class="flq-navbar-container container-fluid">
        <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('torrent-stats',['hash'=>$hash,'movie'=>$movie])->html();
} elseif ($_instance->childHasBeenRendered('B57up16')) {
    $componentId = $_instance->getRenderedChildComponentId('B57up16');
    $componentTag = $_instance->getRenderedChildComponentTagName('B57up16');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('B57up16');
} else {
    $response = \Livewire\Livewire::mount('torrent-stats',['hash'=>$hash,'movie'=>$movie]);
    $html = $response->html();
    $_instance->logRenderedChild('B57up16', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    </div>
</nav>
<!-- / Navbar top -->

<div class="content-wrap">
    <?php echo $__env->yieldContent('contents'); ?>
</div><?php /**PATH C:\Users\mahfaz\Downloads\homeCinema-main\homeCinema-main\resources\views/layout/watchNav.blade.php ENDPATH**/ ?>