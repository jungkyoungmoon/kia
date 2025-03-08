$(document).ready(function () {
    $('#startButton').click(function () {
        goToStep('#step2-1');
        let count = 3;
        let timer = setInterval(function () {
            $('#timer').text(count);
            count--;
            if (count < 0) {
                clearInterval(timer);
                goToStep('#step2-2');
                startProgressBar();
            }
        }, 1000);
    });

    $('.card').click(function () {
        let isCorrect = $(this).data('correct');
        if (isCorrect) {
            $(this).addClass('correct');
            createFireworkEffect();
           // setTimeout(function () { goToStep('#step2-3'); }, 1000);
        } else {
            $(this).addClass('wrong');
            setTimeout(() => $(this).removeClass('wrong'), 1000);
        }
    });
});

function startProgressBar() {
    $('#progress').css({ width: '100%' }).animate({ width: '0%' }, 5000, function () {
       // goToStep('#step2-3');
    });
}

function goToStep(stepId) {
    $('.container').removeClass('visible');
    $(stepId).addClass('visible');
    if (stepId === '#step2-3') showEffects();
}

function showEffects() {
    $('.firework').fadeIn();
    $('.text-effect').each(function (index) {
        setTimeout(() => {
            $(this).css({ opacity: 1, transform: 'translateY(0)' });
        }, index * 1000);
    });
}

function createFireworkEffect() {
    for (let i = 0; i < 50; i++) {
        let confetti = $('<div class="confetti"></div>');
        let xMove = (Math.random() - 0.5) * 300 + 'px';
        let yMove = (Math.random() - 1) * 400 + 'px';
        confetti.css({
            left: 50 + (Math.random() * 30 - 15) + '%',
            top: '50%',
            background: `hsl(${Math.random() * 360}, 100%, 50%)`,
            '--x-move': xMove,
            '--y-move': yMove
        });
        $('body').append(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}