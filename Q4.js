//Ques 4 Get a name, author name, and image of the book which has more than one author

db.books.find(
    {authors :{$not :  {$size:1}} }, 
    {title : 1 , authors : 1 , thumbnailUrl : 1}
    )