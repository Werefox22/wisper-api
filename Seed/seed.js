const DB = require("../models/index");

DB.sequelize.sync({ force: true }).then(async function () {
  await DB.user.bulkCreate([
    {
      user_id: 1,
      name: "username",
      bio: "Sartorial humblebrag normcore, est occaecat adaptogen mixtape distillery pabst hexagon typewriter dolore. Chillwave mustache venmo edison bulb, actually hot chicken ugh in in velit kogi aute.",
      following: 846,
      followed: 894,
    },
    {
      user_id: 2,
      name: "pokemon",
      bio: "3 wolf moon occupy lo-fi pop-up 90's pug raclette, try-hard kogi kickstarter tilde shabby chic fingerstache gochujang dreamcatcher",
      following: 365,
      followed: 132,
    },
    {
      user_id: 3,
      name: "werefox",
      bio: "Mumblecore roof party thundercats vexillologist pitchfork, sartorial banh mi next level prism taxidermy. Ramps wayfarers gentrify tumblr.",
      following: 12,
      followed: 99,
    }
	])

  await DB.post.bulkCreate([
    {
      post_id: 1,
      body: "Im baby labore semiotics cronut lomo intelligentsia tattooed esse tbh meh shabby chic. Taiyaki post-ironic XOXO flexitarian raclette try-hard. Pop-up artisan helvetica schlitz vaporware pitchfork freegan cronut.",
      likes: 456,
      shares: 76,
      tags: 16,
      user_id: "2",
    },
    {
      post_id: 2,
      body: "Dream of the mind's eye paroxysm of global death light years intelligent beings extraordinary claims require extraordinary evidence vastness is bearable only through love.",
      likes: 48,
      shares: 65,
      tags: 8,
      user_id: "1",
    },
    {
      post_id: 3,
      body: "Pickled heirloom quinoa 90's retro four dollar toast paleo tattooed. Hot chicken hoodie everyday carry mlkshk, waistcoat you probably haven't heard of them blue bottle.",
      likes: 5,
      shares: 12,
      tags: 9,
      user_id: "3",
    }

  ]);
  await DB.comment.bulkCreate([
    {
      comment_id: 1,
      body: "Put a bird on it sriracha palo santo occupy chia, drinking vinegar lomo craft beer 3 wolf moon.",
      likes: 684,
      shares: 84,
      user_id: "2",
      post_id: "1",
    },
    {
      comment_id: 2,
      body: "Coloring book af swag waistcoat fanny pack, +1 raw denim asymmetrical lumbersexual scenester authentic.",
      likes: 52,
      shares: 9,
      user_id: "1",
      post_id: "2",
    },
    {
      comment_id: 3,
      body: "Roof party vexillologist lyft prism keytar cronut squid ethical pour-over franzen coloring book actually drinking vinegar stumptown hot chicken.",
      likes: 36,
      shares: 15,
      user_id: "3",
      post_id: "3",
    }
  ]);

  await DB.follow.bulkCreate([
    {
      follow_id: 0,
      source_id: 1,
      target_id: 2
    },
    {
      follow_id: 1,
      source_id: 1,
      target_id: 3
    },
    {
      follow_id: 2,
      source_id: 2,
      target_id: 1
    },
  ])
});
