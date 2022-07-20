const DB = require("./models/index");

DB.sequelize.sync({ force: true }).then(async function () {
  await DB.posts.create(
    {
      post_id: 1,
      body: "Im baby labore semiotics cronut lomo intelligentsia tattooed esse tbh meh shabby chic. Taiyaki post-ironic XOXO flexitarian raclette try-hard. Pop-up artisan helvetica schlitz vaporware pitchfork freegan cronut. Semiotics yr kombucha cardigan ramps cold-pressed pabst",
      likes: 456,
      shares: 76,
      tags: 16,
    },
    {
      post_id: 2,
      body: "Dream of the mind's eye paroxysm of global death light years intelligent beings extraordinary claims require extraordinary evidence vastness is bearable only through love.",
      likes: 48,
      shares: 65,
      tags: 8,
    },
    {
      post_id: 3,
      body: "Pickled heirloom quinoa 90's retro four dollar toast paleo tattooed. Hot chicken hoodie everyday carry mlkshk, waistcoat you probably haven't heard of them blue bottle.",
      likes: 5,
      shares: 12,
      tags: 9,
    }
  );

  await DB.users.create(
    {
      user_id: 1,
      bio: "Sartorial humblebrag normcore, est occaecat adaptogen mixtape distillery pabst hexagon typewriter dolore. Chillwave mustache venmo edison bulb, actually hot chicken ugh in in velit kogi aute.",
      following: 846,
      followed: 894,
    },
    {
      user_id: 2,
      bio: "3 wolf moon occupy lo-fi pop-up 90's pug raclette, try-hard kogi kickstarter tilde shabby chic fingerstache gochujang dreamcatcher",
      following: 365,
      followed: 132,
    },
    {
      user_id: 3,
      bio: "Mumblecore roof party thundercats vexillologist pitchfork, sartorial banh mi next level prism taxidermy. Ramps wayfarers gentrify tumblr.",
      following: 12,
      followed: 99,
    }
  );
  await DB.comments.create(
    {
      comment_id: 1,
      body: "Put a bird on it sriracha palo santo occupy chia, drinking vinegar lomo craft beer 3 wolf moon.",
      likes: 684,
      shares: 84,
    },
    {
      comment_id: 2,
      body: "Coloring book af swag waistcoat fanny pack, +1 raw denim asymmetrical lumbersexual scenester authentic.",
      likes: 52,
      shares: 9,
    },
    {
      comment_id: 3,
      body: "Roof party vexillologist lyft prism keytar cronut squid ethical pour-over franzen coloring book actually drinking vinegar stumptown hot chicken.",
      likes: 36,
      shares: 15,
    }
  );
});
