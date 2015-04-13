var user = prompt('Who do you want to battle? Enter ORC, TROLL, WITCH KING, SHELOB, OLIPHANT, or BALROG.').toUpperCase();
var brave = prompt('Are you brave? YES or NO').toUpperCase();
var armed = prompt('Are you armed? YES or NO').toUpperCase();
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
    case ('SHELOB'):
      var sting = prompt('Do you have Sting? YES or NO').toUpperCase();
      var phial = prompt('Do you have the Phial of Galadriel? YES or NO').toUpperCase();
        if(brave === 'YES' && armed === 'YES' && sting === 'YES' && phial === 'YES') {
            alert('You mortally wounded Shelob! She is retreating into her lair.');
        } else {
          alert('You have been stung by Shelob and are Paralized!.');
        }
        break;
    case ('OLIPHANT'):
      var bow = prompt('Do you have a Bow and Arrows? YES or NO').toUpperCase();
        if(brave === 'YES' && armed === 'YES' && bow === 'YES') {
            alert('You have slain an Oliphant! The soldiers riding on its back have been crushed!');
        } else {
          alert('You have been trampled by and Oliphant.');
        }
        break;
    case ('BALROG'):
      var wizard = prompt('Are you a wizard? YES or NO').toUpperCase();
        if(brave === 'YES' && armed === 'YES' && wizard === 'YES') {
            alert("After falling into the abyss, you pursue the Balrog to the peak of Zirakzigil and throw him down. The Balrog smotes the mountainside in his ruin. You are victorus!");
        } else {
          alert('This foe is beyond you. Fly, you fools!');
        }
        break;
    default:
      alert('Please enter ORC, TROLL, or WITCH KING, SHELOB, OLIPHANT, or BALROG.');
}
