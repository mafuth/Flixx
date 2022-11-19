<div class="container-small flq-vertical-rhythm">
    <table class="table d-none d-lg-block">
        <tbody>
            <?php $__currentLoopData = $movie['torrents']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $torrent): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if($torrent['peers'] != 0): ?>
                    <tr>
                        <td class="flq-color-meta"><?php echo e($torrent['quality'].' '.$torrent['type']); ?></td>
                        <td class="flq-color-meta"><?php echo e($torrent['peers']); ?> peers</td>
                        <td class="flq-color-meta"><?php echo e($torrent['size']); ?></td>
                        <td wire:loading.remove>
                            <button wire:click="addTorrent('<?php echo e($movie['imdb_code']); ?>','<?php echo e($torrent['hash']); ?>')" class="btn btn-icon-sm">
                                <span class="btn-name">Watch Now</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 19L19 12L8 5V19Z" fill="currentColor" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                <?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
    <table class="table d-block d-lg-none">
        <tbody>
            <?php $__currentLoopData = $movie['torrents']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $torrent): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if($torrent['peers'] != 0): ?>
                    <tr>
                        <td class="flq-color-meta"><?php echo e($torrent['quality'].' '.$torrent['type']); ?></td>
                        <td wire:loading.remove>
                            <button wire:click="addTorrent('<?php echo e($movie['imdb_code']); ?>','<?php echo e($torrent['hash']); ?>')" class="btn btn-icon-sm">
                                <span class="btn-name">Watch</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 19L19 12L8 5V19Z" fill="currentColor" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                <?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
</div><?php /**PATH C:\Users\mahfaz\Downloads\homeCinema-main\homeCinema-main\resources\views/livewire/torrents.blade.php ENDPATH**/ ?>