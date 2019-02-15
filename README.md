How use this api?

You have few endpoints:

GET https://test-blog-au.herokuapp.com/api/posts

Show your all posts. No parameters.

Post structure : 

  

    {
      "_id": {
          "$oid": "5c66b8501a8ae281f4d6b851"
      },
      "title": "Hello",
      "body": "Hello heloooo",
    }
    
 

--------------------------------------


GET https://test-blog-au.herokuapp.com/api/posts/:id

Method for getting single post with comments.

e.g. 

https://test-blog-au.herokuapp.com/api/posts/5c66b8501a8ae281f4d6b851


  

    {
       "_id": {
        "$oid": "5c66b8501a8ae281f4d6b851"
    },
    "title": "Hello",
    "body": "Hello heloooo",
    "comments": [
        {
            "_id": {
                "$oid": "5c66beeded4bdf001773a66c"
            },
            "author": "Anonymous",
            "text": "Hello everyone!"
        }
    ],
    "__v": 1
    }


--------------------------------------


POST https://test-blog-au.herokuapp.com/api/posts/

Creating new post. Required body parameters: title -> String, body -> String.


--------------------------------------


POST https://test-blog-au.herokuapp.com/api/posts/:id/comments

Creating new comment to post. Required body parameters: author -> String, text -> String.

e.g. 

https://test-blog-au.herokuapp.com/api/posts/5c66b8501a8ae281f4d6b851/comments


--------------------------------------


PUT https://test-blog-au.herokuapp.com/api/posts/:id

Updating existed post. Required body parameters all post (post object)

e.g.

https://test-blog-au.herokuapp.com/api/posts/5c66b8501a8ae281f4d6b851
  

    {
      "_id": {
          "$oid": "5c66b8501a8ae281f4d6b851"
      },
      "title": "New title",
      "body": "New Body",
    }
    
 

--------------------------------------

DELTE https://test-blog-au.herokuapp.com/api/posts/:id

Delete post by id.
