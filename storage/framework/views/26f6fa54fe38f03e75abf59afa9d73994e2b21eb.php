<?php $__env->startSection('contents'); ?>
<div class="py-7">
    <div class="container flq-isotope">
        <nav>
            <ul class="nav nav-tabs justify-content-center text-center mb-5" data-sr="movie-options" data-sr-interval="80" data-sr-duration="1000" data-sr-distance="10">
                <?php $__currentLoopData = $gernres; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tempGernre): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php if($gernre == $tempGernre): ?>
                        <li class="nav-item">
                            <a href="<?php echo e(route('movies',array('gernre'=>$tempGernre))); ?>" class="nav-link active"><span class="nav-link-name"><?php echo e($tempGernre); ?></span></a>
                        </li>
                    <?php else: ?>
                        <li class="nav-item">
                            <a href="<?php echo e(route('movies',array('gernre'=>$tempGernre))); ?>" class="nav-link"><span class="nav-link-name"><?php echo e($tempGernre); ?></span></a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </nav>
        <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('movies',['gernre'=>$gernre,'search'=>$search])->html();
} elseif ($_instance->childHasBeenRendered('Qh0x7Yy')) {
    $componentId = $_instance->getRenderedChildComponentId('Qh0x7Yy');
    $componentTag = $_instance->getRenderedChildComponentTagName('Qh0x7Yy');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('Qh0x7Yy');
} else {
    $response = \Livewire\Livewire::mount('movies',['gernre'=>$gernre,'search'=>$search]);
    $html = $response->html();
    $_instance->logRenderedChild('Qh0x7Yy', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\mahfaz\Downloads\homeCinema-main\homeCinema-main\resources\views/movies.blade.php ENDPATH**/ ?>