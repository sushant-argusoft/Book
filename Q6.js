//Ques 6 Get a list of authors having more than one book


db.books.aggregate([{ $unwind: "$authors" }, { $group: { _id: { authors: "$authors" }, count : {$sum : 1} , 
title : {$push : "$title"} } },
{$match : { 
    count :{$gt : 1}             
}}
])
