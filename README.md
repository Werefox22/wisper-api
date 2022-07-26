# wisper-api
Welcome to the backend repository for the Wisper app. The frontend repository can be found [here.](https://github.com/AnthonyConnell/wisper-frontend)
### Table of Contents
* [Database](#database)
* [API](#api)

## Installation

## Database
This API makes use of [PostgreSQL](https://www.postgresql.org/). Currently there are 4 tables:

![ERD](./assets/erd.png)

`users, posts, comments, follows`

All of the tables are dependent on the User table - every post has a user, every comment has a post and a user, and every user can follow any other user.

Below is the documentation for each table. You can expand each dropdown to find a short summary of the data structure, and nested inside are more detailed instructions and examples.

### Users
#### Summary
This table holds data about a user

Column		| Data type		| Nullable? | Description
---			| ---			| --- 		| ---
user_id		| integer		| false 	| The user ID
name		| string		| false		| The user's username
bio			| string		| true 		| The user's bio
followed	| integer		| true		| How many users are following this user

#### Posts

#### Comments

#### Follows

## API

Method	| Path					| Purpose
---		| --- 					| ---
GET 	| /						| Landing page
GET		| /post/:id				| Get specific post
GET		| /post/:id?{options}	| Get specific post and eager load some data
POST	| /post					| Create new post
PUT		| /post/:id				| Update post
DELETE	| /post/:id				| Delete post
GET		| /comment/:id			| Get specific comment
POST	| /comment 				| Create comment
PUT		| /comment/:id			| Edit comment
DELETE	| /comment/:id			| Delete comment
GET		| /user/:id				| Get specific user
GET		| /user/:id?{options}	| Get specific user and eager load their posts
PUT		| /user/:id				| Update user profile
DELETE	| /user/:id				| Delete user profile
GET		| *						| 404 page



<details>
<summary>User</summary>
<br>

### Request
`GET user`

	https://wisper-api-71822.herokuapp.com/user/{id}?{options}

`id:` The id of the user you wish to get.

`options:` Options to choose what data to include in the response.

### Options

`withPosts=true:` Include the user's posts.

`withComments=true:` Include the user's comments.

`withFollows=true:` Include the user's follows.

### Response Example
	{
		"user_id": 1,
		"name": "username",
		"bio": "Sartorial humblebrag normcore, est occaecat adaptogen mixtape distillery pabst hexagon typewriter dolore. Chillwave mustache venmo edison bulb, actually hot chicken ugh in in velit kogi aute.",
		"followed": 894
	}

</details>

### Options
Route			| Query			| Purpose
---				| --- 			| ---
GET /post/:id	| ?withComments	| Include the post's comments
GET /user/:id	| ?withPosts	| Include the user's posts
GET /user/:id	| ?withFollows	| Include the user's follows
GET /user/:id	| ?withComments	| Include the user's comments

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


### Following
This table tracks which users each user is following. Each line in this table indicates one follow, with the source_id belonging to the user who is following, and the target_id is the user being followed.
Column		| Data type		| Description
---			| ---			| ---
follow_id	| integer		| The id of this entry
source_id	| integer		| The id of the source user
target_id	| integer		| The id of the target user