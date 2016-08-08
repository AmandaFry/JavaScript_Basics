console.log('1st problem')
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('2nd')
console.log('###########################################');
console.log('3rd')
console.log('...........................................');
console.log('4th')
console.log('*******************************************');
console.log('5th')
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

function deckConstructor(){
   
                var cards = []; //this will be the sorted and shuffled deck of cards.
          
                function deckofCard(){
                    var suite = ["Hearts", "Diamonds", "Clubs", "Spades"];
                    var numbers = [2,3,4,5,6,7,8,9,10,'Jack','Queen', 'King', 'Ace'];
                    cardsinOrder = []; //this will be the sorted deck of cards.
                    //creating an array of the ordered deck of cards
                    for(var h = 0; h < suite.length; h++){
                        for(var i = 0; i < numbers.length; i++){
                            cardsinOrder.push(numbers[i]+ ' of ' + suite[h])
                        }
                    }
                    return cardsinOrder;
                }

                cards = deckofCard();

                this.shuffelCards = function(){
                    // console.log("pre sfulled array:");
                    // console.log(cards);
                    for (var i= 0; i < cards.length; i++){
                        j = Math.floor(Math.random() * (i + 1))
                        temp = cards[i];
                        cards[i] = cards[j];
                        cards[j] = temp;
                    }
                    console.log("after Shuffled cards")
                    console.log(cards);
                    return cards;
                }

                    this.deal = function(){
                        if (cards.length > 0){
                            return cards.pop();
                        }
                    }
            }
            
            function playerConstructor(name){
                var name = name;
                var hand =[];

                this.intreduce = function(){
                    console.log("Hello my name is " +name);
                }

                this.getCard = function(cards){
                    hand.push(cards);
                }

                this.showHand = function(){
                    console.log(hand);
                }

                this.discard = function(){
                    if(hand.length > 0){
                    hand.pop();
                    }
                }

            }

            var player1 = new deckConstructor();
            player1.shuffelCards();
            console.log(player1.deal());
            console.log(player1.deal());
            console.log(player1.deal());
            console.log(player1.deal());

            var Amanda = new playerConstructor("Amanda");
            Amanda.intreduce();
            Amanda.getCard(player1.deal());
            Amanda.getCard(player1.deal());
            Amanda.getCard(player1.deal());
            Amanda.getCard(player1.deal());
            Amanda.showHand();
            Amanda.discard();
            Amanda.showHand();
