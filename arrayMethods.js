var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

var nameArray = ['Ray', 'Farias'];

//push first and last name to em pty array
var myName = [];
myName.push('Jason');
myName.push('Tsukamoto');

//push numbers to existing array
genericNumberArray.push(6);
genericNumberArray.push(7);
genericNumberArray.push(8);
genericNumberArray.push(9);
genericNumberArray.push(10);

//remove last element of an array
var popResult = colors.pop();

//reverse words in array
scrambledWords.reverse();
phoneNumber.reverse();

//shift array
var nextOrder = orderQueue.shift();

//sort array
mixedNums.sort();
mixedWords.sort();

//splice array
var notFruit = fruitCollection.splice(1, 3);
gemBox.splice(5, 7, 'Sapphire');

//inserting elements
upToTen.splice(2,2,3,4,5,6,7,8,9,10);

//brownOnly
brownOnly.splice(1, 5, 'brown', 'brown', 'brown');

//unshift
orderedValues.unshift(1, 2, 3);
var orderedValuesNewLength = orderedValues.length;

//concat
var randomThingsArray = genericNumberArray.concat(colors);
var updatedOrders = orderQueue.concat({takeOut: 'pizza'}, {takeOut: 'steak'});

//join method
var sentence = scrambledWords.join(' ');
var myFruits = fruitCollection.join(' + ');

//slice method
var favoriteFriends = friends.slice(1, 3);
var owesMoney = friends.slice(3, 6);

//toString method
var monthNameString = monthNames.toString();

//indexOf method
var favoriteColor = colors.indexOf('Red');
var favoriteEvenNumber = mixedNums.indexOf(76);

//lastIndexOf
var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);
