var user = prompt('Who do you want to battle? Enter ORC, TROLL, or WITCH KING.').toUpperCase();
var brave = prompt('Are you brave? YES or NO').toUpperCase();
var armed = prompt('Do you have a weapon? YES or NO').toUpperCase();
switch(user) {
    case ('ORC'):
        var brave = prompt('Are you brave? YES or NO').toUpperCase();
        if(brave === 'YES' || armed === 'YES') {
            console.log('You defeated the Orc!');
        } else {
        console.log('You have been defeated.');
        }
        break;
    case ('TROLL'):
        if(brave === 'YES' && armed === 'YES') {
            console.log('You defeated the Troll!');
        } else {
        console.log('You have been defeated.');
        }
        break;
    case ('WITCH KING'):
        var woman = prompt('Are you a woman? YES or NO').toUpperCase();
        if(brave === 'YES' && armed === 'YES' && woman === 'YES') {
            console.log('You defeated the Witch King!');
        } else {
        console.log('Fool! No man can defeat me!');
        }
        break;
    default:
        console.log('Please enter ORC, TROLL, or WITCH KING.');
}
