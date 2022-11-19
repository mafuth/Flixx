<?php $__env->startSection('header'); ?>
     <div class="flq-swiper-wrapper flq-background">
            <div class="flq-background-overlay  py-6 d-flex align-items-end align-items-md-center z-index-2">
                <div class="container  d-flex justify-content-center justify-content-md-end flq-pe-none ">
                    <div class="flq-swiper-pagination lq-swiper-pagination-horizontal flq-swiper-pagination-md-vertical flq-pe-initial "></div>
                </div>
            </div>
            <div class="swiper flq-swiper-main" data-parallax=true data-auto-height=true data-speed=600 data-pagination=true>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <?php echo $__env->make('elements.homeSlides', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                    </div>
                </div>
            </div>
        </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('contents'); ?>
    <?php $__currentLoopData = App\Lib\Yts::getGernres(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $gernre): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if($gernre != "All"): ?>
            <div class="flq-swiper-wrapper my-7 mb-7" data-sr="new-releases" data-sr-interval="100" data-sr-duration="1000" data-sr-distance="10">
                <div class="container mb-5" data-sr-item="new-releases">
                    <h2>Top rated <?php echo e(strtolower($gernre)); ?> movies</h2>
                </div>
                <div class="swiper flq-swiper-effect-touch" data-sr-item=new-releases data-buttons=true data-pagination-custom=true data-gap=30 data-speed=800 data-touch-ratio=0.8 data-slides=1, data-breakpoints=636:2,1072:3,1280:4>
                    <div class="swiper-container container">
                        <div class="swiper-wrapper">
                            <?php echo $__env->make('elements.homesingleSlides',["movies"=>App\Lib\Yts::getTopRatedMovies(1,30,$gernre)], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="row align-items-center justify-content-between gx-5">
                        <div class="col-auto" data-sr-item="new-releases">
                            <div class="flq-swiper-pagination-custom"></div>
                        </div>
                        <div class="col d-none d-sm-block" data-sr-item="new-releases">
                            <hr />
                        </div>
                        <div class="col-auto" data-sr-item="new-releases">
                            <div class="flq-swiper-button-prev btn btn-sm btn-dark btn-active btn-square btn-icon-sm me-1" data-sr-item="related">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="flq-swiper-button-next btn btn-sm btn-dark btn-active btn-square btn-icon-sm" data-sr-item="related">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\mahfaz\Downloads\homeCinema-main\homeCinema-main\resources\views/index.blade.php ENDPATH**/ ?>