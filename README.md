# wisper-api

## Routing
Method	| Path					| Purpose
---		| --- 					| ---
GET 	| /						| Landing page
GET		| /post/:id				| Get specific post
GET		| /post/user/:userid	| Get all posts by a specific user
POST	| /post					| Create new post
PUT		| /post/:id				| Update post
DELETE	| /post/:id				| Delete post
GET		| /comment/:id			| Get specific comment
GET		| /comment/post/:postid	| Get all comments on a specific post
POST	| /comment 				| Create comment
PUT		| /comment/:id			| Edit comment
DELETE	| /comment/:id			| Delete comment
GET		| /user/:id				| Get specific user profile
PUT		| /user/:id				| Update user profile
DELETE	| /user/:id				| Delete user profile
GET		| *						| 404 page

## Post Data
Key		| Data type	| Description
---		| ---		| ---
id		| integer	| The post ID
body	| string	| The text body of the post
likes	| integer	| The amount of likes the post has
shares	| integer	| The amount of shares the post has
tags	| string	| The tags on the post
edited	| bool		| Whether or not the post has been edited
date	| date		| The time the post was created
user_id	| integer	| The profile ID of the user who posted it

## Comment Data
Key		| Data type	| Description
---		| ---		| ---
id		| integer	| The comment ID
body	| string	| The text body of the comment
likes	| integer	| The amount of likes the comment has
shares	| integer	| The amount of shares the comment has
edited	| bool		| Whether or not the comment has been edited
date	| date		| The time the comment was created
user_id	| integer	| The profile ID of the user who posted it
post_id	| integer	| The ID of the post being commented on

## User Data
Key			| Data type		| Description
---			| ---			| ---
id			| integer		| The user ID
bio			| string		| The user's bio
following	| integer array	| A list of all the user IDs the user is following
followed	| integer		| How many users are following this user
