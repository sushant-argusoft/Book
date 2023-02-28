//Ques 5 Get a list of books by categories


db.books.aggregate(
    [{$unwind : "$categories"},
    {$group : {_id : {catgories: "$categories"},
     listOfTitle : {$push: "$title"}}}, 
     {$project : { categories:"$categories", listOfTitle:1}}
    ])