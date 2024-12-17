function friend(friends){
    //your code here
    // I will first pass through the whole array
    // Then I will look for elements which have 4 as length
    // Then I will push those elements to the empty array
    // Then I will display that array
    
    let myFriends = [];
    for (let i = 0; i<friends.length; i++){
      if(friends[i].length === 4){
        myFriends.push(friends[i]);
      }
    }
    return myFriends;
  }