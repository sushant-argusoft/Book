//Ques 2 Get a distinct list of categories from the dataset




db.books.aggregate(
    [{$unwind : "$categories"},
    {$project: {_id :0 , categories : 1}},
    {$group : {_id:{categories: "$categories"},
    categoriesAll: {$addToSet: "$categories"}}},
    {$project : {_id : 0 , categories : "$categoriesAll"}},
    {$unwind : "$categories"}]
    )
