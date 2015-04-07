var user = prompt('Who do you want to battle? Enter ORC, TROLL, or WITCH KING.').toUpperCase();
var brave = prompt('Are you brave? YES or NO').toUpperCase();
var armed = prompt('Do you have a weapon? YES or NO').toUpperCase();
switch(user) {
    case ('ORC'):
        if(brave === 'YES' || armed === 'YES') {
            alert('You defeated the Orc!');
        } else {
          alert('You have been defeated.');
        }
        break;
    case ('TROLL'):
        if(brave === 'YES' && armed === 'YES') {
          alert('You defeated the Troll!');
        } else {
          alert('You have been defeated.');
        }
        break;
    case ('WITCH KING'):
        var woman = prompt('Are you a woman? YES or NO').toUpperCase();
        if(brave === 'YES' && armed === 'YES' && woman === 'YES') {
          alert('You defeated the Witch King!');
        } else {
          alert('Fool! No man can defeat me!');
        }
        break;
    default:
      alert('Please enter ORC, TROLL, or WITCH KING.');
}
