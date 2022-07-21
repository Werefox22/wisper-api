# wisper-api

## Routing
Method	| Path					| Purpose
---		| --- 					| ---
GET 	| /						| Landing page
GET		| /post/:id				| Get specific post
GET		| /post/:id?withComments=true	| Get specific post and eager load the comments
POST	| /post					| Create new post
PUT		| /post/:id				| Update post
DELETE	| /post/:id				| Delete post
GET		| /comment/:id			| Get specific comment
POST	| /comment 				| Create comment
PUT		| /comment/:id			| Edit comment
DELETE	| /comment/:id			| Delete comment
GET		| /user/:id				| Get specific user
GET		| /user/:id?withPosts	| Get specific user and eager load their posts
PUT		| /user/:id				| Update user profile
DELETE	| /user/:id				| Delete user profile
GET		| *						| 404 page

## Tables
### Posts
Column	| Data type	| Description
---		| ---		| ---
post_id	| integer	| The post ID
body	| string	| The text body of the post
likes	| integer	| The amount of likes the post has
shares	| integer	| The amount of shares the post has
tags	| string	| The tags on the post
edited	| bool		| Whether or not the post has been edited
date	| date		| The time the post was created
user_id	| integer	| The profile ID of the user who posted it

### Comments
Column		| Data type	| Description
---			| ---		| ---
comment_id	| integer	| The comment ID
body		| string	| The text body of the comment
likes		| integer	| The amount of likes the comment has
shares		| integer	| The amount of shares the comment has
edited		| bool		| Whether or not the comment has been edited
date		| date		| The time the comment was created
user_id		| integer	| The profile ID of the user who posted it
post_id		| integer	| The ID of the post being commented on

### Users
Column		| Data type		| Description
---			| ---			| ---
user_id		| integer		| The user ID
bio			| string		| The user's bio
followed	| integer		| How many users are following this user

### Following
This table tracks which users each user is following. Each line in this table indicates one follow, with the source_id belonging to the user who is following, and the target_id is the user being followed.
Column		| Data type		| Description
---			| ---			| ---
follow_id	| integer		| The id of this entry
source_id	| integer		| The id of the source user
target_id	| integer		| The id of the target user