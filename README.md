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


--------------------------------------


POST https://test-blog-au.herokuapp.com/api/posts/

Creating new post. Required body parameters: title -> String, body -> String.

--------------------------------------


