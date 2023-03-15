bucket = [1, 'stone', 'gold']

function checkTheBucket(bucket){
  //your code here
  gold = false

  for (var i = 0; i < bucket.length; i++){
   if (bucket[i] === "gold") {
    gold = true;
    }
  };
}

checkTheBucket(bucket)
