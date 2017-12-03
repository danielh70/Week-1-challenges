function userLookup(index){
  let users = [
    {
      name: 'Bob',
      age: 37
    },
    {
      name: 'Mary',
      age: 7
    },
    {
      name: 'Enoch',
      age: undefined
    }
  ]

  return new Promise(function(resolve, reject){
    let selectedUser = users[index]

    if(selectedUser){
      resolve(selectedUser)
    }else{
      reject("Could not resolve user")
    }
  })
}

userLookup(1).then(function(user){
  console.log("Found " + user.name)
}).catch(function(error){
  console.log("Error: " + error)
})

userLookup(2341).then(function(user){
  console.log("Found " + user.name)
}).catch(function(error){
  console.log("Error: " + error)
})
