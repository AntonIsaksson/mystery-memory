$(document).ready(function () {

    let flippedCards = [];
    var remainingSeconds = 30;
    let numberOfCardsInLevel = [3, 4, 6];
    let creaturesImages = ["./img/death.png", "./img/ghost.png", "./img/scarecrow.png", "./img/bat.png", "./img/frankenstein.png", "./img/haunted-house.png", "./img/mummy.png", "./img/raven.png", "./img/spider.png"];
    let currentLevel = 0;

    setUpGame();
    nextLevel();
    
    
    
    function setUpGame() {
        
        $('#start-btn').click(function () {
            initializeGame();
            $('.btn-start').toggle();
            $('.timer-container').toggleClass('hidden');
            $('.front').css("cursor", "pointer");
            remainingSeconds = 30;
        });

        // Restarting the Game
        $('#start-over-btn, #restart-btn').click(function () {
            $('#time').html("30");
            currentLevel = 0; 
            initializeGame();
            $('.front').css("cursor", "pointer");
        });

    }

    function initializeGame() {

        // Closing all modals
        $('#success-modal').hide();
        $('#game-over-modal').hide();

        remainingSeconds = 30;

        let numberOfCardsInCurrentLevel = numberOfCardsInLevel[currentLevel];

        let creaturesArray = [];
        for (let index = 0; index < numberOfCardsInCurrentLevel; index++) {
            const element = numberOfCardsInCurrentLevel[index];
            creaturesArray.push(index);
            creaturesArray.push(index);
        }

        indexArrayShuffled = shuffleArray(creaturesArray);
        $('#my-cards').html('');
        for (let index = 0; index < indexArrayShuffled.length; index++) {
            const element = indexArrayShuffled[index];
            
            var markUp = '<div class="card-container"><div class="card mx-auto front col-12"></div></div>';
                if (currentLevel === 0) {
                    markUp = '<div class="card-container col-4"><div class="level-1 card front mx-auto col-12"></div></div>';
                }else if (currentLevel === 1) {
                    markUp = '<div class="card-container col-3"><div class="level-2 card front mx-auto col-12"></div></div>';
                }else if (currentLevel === 2) {
                    markUp = '<div class="card-container col-3"><div class="level-3 card front mx-auto col-12"></div></div>';
                }
                
                $('#my-cards').append(markUp);
        
        }

        //Assigning cards their indexes
        $('.card').each(function (index) {
            $(this).attr('data-card-index', indexArrayShuffled[index]);

            //onClick eventlisteners to all cards
            $(this).on('click', flipCard);

            $(this).html("<img class='memoryImg img-" + indexArrayShuffled[index] + "' style='display: none;' src='" + creaturesImages[indexArrayShuffled[index]] + "'>");


        });
        startTimer();
    }


    function nextLevel() {
    
        $('#next-level-btn').on('click', function () {
            var noOfLevels = numberOfCardsInLevel.length;
            if (currentLevel >= noOfLevels)
                alert("You have already reached max level. Reload the page to play again!"); // Only for error handling
            else {
                // To next Level
                currentLevel++;
                initializeGame();
                $('#time').html("30");
                $('.front').css("cursor", "pointer");
            }
        });
    }
    function startTimer() {
        console.log("Start");
        //https://jsfiddle.net/satyasrinivaschekuri/y03m54Le/

        var interval = setInterval(function () {
            remainingSeconds--;

            if (remainingSeconds < 0) {
                clearInterval(interval);
                gameFinished();
                return;
            } else {
                $('#time').text(remainingSeconds);
                console.log("Timer --> " + remainingSeconds);
            }

        }, 1000);
    }

    function flipCard() {

        //Push the card index to the array only if the card isn't green already
        flippedCards.push($(this));
        $(this).toggleClass('back').toggleClass('front');
        //Show image
        $(this).find('img').css('display', 'inline');
        //Remove the event listener so we don't register it twice
        $(this).off('click', flipCard);

        let sameCardIndex = false;

        if (flippedCards.length > 1 && flippedCards[0].data('card-index') == flippedCards[1].data('card-index')) {
            sameCardIndex = true;
        }

        //User chooses the correct cards
        if ((flippedCards.length > 1) && sameCardIndex) {

            flippedCards.forEach(card => {
                card.addClass('correct');
            });

            flippedCards = [];

            //Wrong cards or user clicks same card twice
        } else if (flippedCards.length > 1 && !sameCardIndex) {

            setTimeout(() => {
                flippedCards.forEach(element => {
                    //Add the event listener again
                    element.on('click', flipCard);
                    element.toggleClass('back').toggleClass('front');
                    element.find('img').css('display', 'none');
                });
                flippedCards = [];
            }, 500);

        }

        setTimeout(gameFinished, 1000);

    }

    function shuffleArray(arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }

    function gameFinished() {

        var success = $('.front').length === 0 && remainingSeconds > 0;
        var gameOver = $('.front').length > 0 && remainingSeconds <= 0; console.log(gameOver);

        if (success) {
            remainingSeconds = -1;
            var noOfLevels = numberOfCardsInLevel.length;

            
            // Game Complete
            if (currentLevel >= noOfLevels - 1) {
                $('#next-level-btn').hide();
                $('#start-over-btn').show();
                $('#success-text').html('You have now finished all levels!');
            }
            else {
                $('#next-level-btn').html('Level ' + (currentLevel + 2));
                $('#success-text').html('Move on to the next round!');
                $('#next-level-btn').show();
                $('#start-over-btn').hide();
            }

            $('#success-modal').show();

        } else if (gameOver) {
            remainingSeconds = -1; // Adds -1 to stop timer
            $('#game-over-modal').show();

        }
    }

});