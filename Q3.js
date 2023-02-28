//Ques 3 Get a list of books which has pages between 350 to 500


db.books.find(
                {$and:
                    [{pageCount:{$gt : 350}},
                    {pageCount:{$lt : 450}}]
                }
                ,{_id: 0 , title : 1}
            )
