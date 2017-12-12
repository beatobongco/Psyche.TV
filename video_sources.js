var videos = [
  {
    id: "299JvE84PEY",
    title: "Ethan Pringle - Howl's Moving Castle (V12/V13)",
    type: "youtube",
    description: "An amazing boulder up in the clouds."
  },
  {
    id: "367YsIRM3xI",
    title: "Ethan Pringle - Everything is Karate (5.14 c/d | 8c/c+ FA)",
    type: "youtube",
    description: "A 5.14+ route on granite in California. One of the best routes Pringle has ever climbed."
  },
  {
    id: "gbK4MqpFsVc",
    title: "Adam Ondra - Robin Ud (9b FA)",
    type: "youtube",
    description: "Adam Ondra's first ascent of the brutal 9b power endurance route Robin Ud."
  },
  {
    id: "4DfMZ1OPJrM",
    title: "Daniel Woods - Fantasia V14 FA",
    type: "youtube",
    description: ""
  },
  {
    id: "20090713",
    title: "Jimmy Webb - Fantasia V14",
    type: "vimeo",
    description: "Second ascent."
  },
  {
    id: "2pSbj6mIFy0",
    title: "Nalle Hukkataival - 8C/8C+ compilation",
    type: "youtube",
    description: "Watch Nalle slay the world's hardest boulder problems."
  },
  {
    id: "WjAmnLFlkbk",
    title: "North Face Roctrip - Shikoku",
    type: "youtube",
    description: "Toru Nakajima, Tomoa Narasaki, and Akiyo Noguchi do hard bouldering in Shikoku, Japan."
  },
  {
    id: "dAFBxEvOqVQ",
    title: "Tomoa Narasaki - Unleashed",
    type: "youtube",
    description: "Japanese powerhouse Tomoa Narasaki tops all 4 World Cup boulder problems in Munich 2016."
  },
  {
    id: "NXe7d4ouRpg",
    title: "Es Pontas (9a+) second ascent - Jernej Kruder",
    type: "youtube",
    description: "Kruder repeats Sharma's king line in Mallorca, Spain."
  },
  {
    id: "s5PUKWJooB4",
    title: "Chris Sharma trained by Patxi Usobiaga",
    type: "youtube",
    description: "Amazing footage of Chris training for probably the world's first 9c."
  },
  {
    id: "Yn2tHcZEnF0",
    title: "Alex Honnold Climbs Angola",
    type: "youtube",
    description: "Honnold and friends navigate landmines and unclimbed rock in South Africa."
  },
  {
    id: "179993676",
    title: "Take Hold - Jason Kehl",
    type: "vimeo",
    description: "Motivational video about the climbing lifestyle."
  },
  {
    id: "181035215",
    title: "The PsicoRoc Highlight Reel",
    type: "vimeo",
    description: "The first deep-water-solo climbing competition ever to be held on real stone in America."
  },
  {
    id: "175837901",
    title: "Hungry Monkeys",
    type: "vimeo",
    description: "Some awesome 7c - 8a+ climbing in Tonsai, Thailand."
  },
  {
    id: "-TeTejh1ebs",
    title: "Arnaud Petit - Black Bean (8b trad)",
    type: "youtube",
    description: "Arnaud Petit climbing 'Black Bean' 8b in Ceüse a fabulous 65 m route, using his own gear for protection."
  },
  {
    id: "FgjoFv33kKk",
    title: "Stephanie Bodet - Octogenese (8a+)",
    type: "youtube",
    description: "Of the rock I asked for the moon. Climbing a beautiful and extreme slab multi-pitch in Corsica, Stephanie Bodet offers a singular and poetical vision of climbing. "
  },
  {
    id: "mLpC3BLw_QQ",
    title: "Exposure Vol. 2: Dmitriy Sharafutdinov",
    type: "youtube",
    description: "The Russian athlete's crazy training for World Cup events."
  },
  {
    id: "HaO477TjXus",
    title: "Sasha DiGiulian",
    type: "youtube",
    description: "Great Wide Open episode 1. Directed by Jared Leto. Celebrates America's National Parks and the incredible adventurers who explore them."
  },
  {
    id: "RWidwSAc57M",
    title: "Alex Honnold & Felipe Camargo - Getting up Getu",
    type: "youtube",
    description: "Getu, China - they attempt one of the longest, steepest roof climbs in the world: Corazón de Ensueño, an 8 pitch 5.14b."
  },
  {
    id: "4xsKa-dAH8M",
    title: "Tommy Caldwell: The Conquistador",
    type: "youtube",
    description: "Great Wide Open episode 1. Directed by Jared Leto. Celebrates America's National Parks and the incredible adventurers who explore them."
  },
  {
    id: "MLxAVxtpYP0",
    title: "Renan Ozturk: The Dirtbag",
    type: "youtube",
    description: "Great Wide Open episode 2. Directed by Jared Leto. Celebrates America's National Parks and the incredible adventurers who explore them."
  },
  {
    id: "shXpJ8gnk8I",
    title: "Alex Honnold: The Rockstar",
    type: "youtube",
    description: "Great Wide Open episode 3. Directed by Jared Leto. Celebrates America's National Parks and the incredible adventurers who explore them."
  },
  {
    id: "ENba9T05r_8",
    title: "Bouldering World Cup Innsbruck - Finals 2016",
    type: "youtube",
    description: ""
  },
  {
    id: "Ml-rxMwcaf0",
    title: "The Insiders",
    type: "youtube",
    description: "Indoor climbing featuring climbing superstars."
  },
  {
    id: "4QrvLoxFAM4",
    title: "Daniel Woods Wins World Cup",
    type: "youtube",
    description: "2010 Bouldering World Cup in Vail, Colorado."
  },
  {
    id: "0bHF5Yfu_jQ",
    title: "German Climbing Team Training, Stuntwerk 2014",
    type: "youtube",
    description: "German Climbing Team in Cologne's futuristic Stuntwerk bouldering gym."
  },
  {
    id: "Phl82D57P58",
    title: "Alex Honnold - El Sendero Luminoso (7c)",
    type: "youtube",
    description: "Alex Honnold free-soloing El Sendero Luminoso (The Shining Path) in El Portrero Chico, Mexico."
  },
  {
    id: "108093247",
    title: "Time in the Pines: Welcome to the Future",
    type: "vimeo",
    description: "Bouldering porn. Beautifully shot climbing in Hope Valley."
  },
  {
    id: "yOQYlheOLy4",
    title: "Chris Sharma - Es Pontas (9a+)",
    type: "youtube",
    description: "Chris Sharma climbs his King Line, the deep water solo route of Es Pontas (9a+)."
  },
  {
    id: "71856230",
    title: "Daniel Woods - The Wheel of Life (V15)",
    type: "vimeo",
    description: "Daniel Woods sending The Wheel of Life, 9a in the Grampians of Victoria, Australia."
  },
  {
    id: "69170991",
    title: "James Kassay - Wheel of Life Direct (V15)",
    type: "vimeo",
    description: "A more difficult finish to the Wheel of Life."
  },
  {
    id: "112839073",
    title: "Jimmy Webb - Defying Gravity (V15)",
    type: "vimeo",
    description: "Jimmy Webb defies gravity on this unreal V15."
  },
  {
    id: "7VCXhkUbIRE",
    title: "Jimmy Webb - Warpath (V14)",
    type: "youtube",
    description: "Jimmy Webb repeating James Litz's Warpath, a V14 in Idaho."
  },
  {
    id: "2EdpRxSWRPc",
    title: "Jimmy Webb - Rocklands, South Africa",
    type: "youtube",
    description: "Jimmy Webb bouldering in his iconic, powerful style."
  },
  {
    id: "149599213",
    title: "Jimmy Webb - The Matriarch (V15)",
    type: "vimeo",
    description: "Rocktown, Georgia."
  },
  {
    id: "IqNfLGjyRQc",
    title: "Sonnie Trotter - Totem Pole (8a)",
    type: "youtube",
    description: "First free ascent of the Ewbank Route on Tasmania's Totem Pole."
  },
  // {
  //   id: "10818933",
  //   title: "Fred Rouhling - The Other Side of the Sky",
  //   type: "vimeo",
  //   description: "Controversial but beautiful 9A roof. Sick moves."
  // },
  {
    id: "vk4YrOtVTLg",
    title: "Chris Sharma - El Bon Combat (9b)",
    type: "youtube",
    description: "First ascent of a hard and beautiful 9b/9b+ line at Cova De l'ocell, Barcelona."
  },
  {
    id: "66473915",
    title: "Jan Hojer Training",
    type: "vimeo",
    description: "Jan Hojer's insane strength and training."
  },
  {
    id: "g32aHW_TFq8",
    title: "Stuntwerk - Circus Maximus",
    type: "youtube",
    description: "Amazingly long dynamic gym boulder."
  },
  {
    id: "slvZIYMcRvo",
    title: "Team GB Bouldering: Training Day",
    type: "youtube",
    description: ""
  },
  {
    id: "M00evPO6j5w",
    title: "Magnus Midtbo - Hardest Route in Sognahallen",
    type: "youtube",
    description: "A young Magnus leads a long and impressive gym route."
  },
  {
    id: "RwYirFNSpKo",
    title: "Jimmy Webb and Matt Gentil in Virgin Gorda",
    type: "youtube",
    description: "Jimmy Webb and Matt Gentile explore beach boulders and FAs on Virgin Gorda in the British Virgin Islands."
  },
  {
    id: "87907728",
    title: "Ian Dory - Paint It Black (V15)",
    type: "vimeo",
    description: "Ian Dory on Paint It Black (V15)"
  },
  {
    id: "OxAZZNkVJ1U",
    title: "Daniel Woods - The Ice Knife Sit (V15)",
    type: "youtube",
    description: ""
  },
  {
    id: "104492465",
    title: "Climbing Mallorca",
    type: "vimeo",
    description: "Deep water soloing and slacklining in Mallorca. Bucket-list material."
  },
  {
    id: "V1P97VVt6_k",
    title: "La Dura Complete (9b+)",
    type: "youtube",
    description: "Chris Sharma and Adam Ondra sending La Dura Dura (5.15c / 9b+)."
  },
  {
    id: "45591691",
    title: "Will Stanhope - Zombie Roof (7c)",
    type: "vimeo",
    description: "Will Stanhope free-soloing the Zombie Roof (5.12d) in Squamish, B.C"
  },
  {
    id: "lZT-Ldp55PQ",
    title: "Sisu Masters 2016 Highlights",
    type: "youtube",
    description: "Six masters compete on six super hard problems set by the climbers themselves."
  },
  {
    id: "EcU255XBlcI",
    title: "Petzl RocTrip China 2011",
    type: "youtube",
    description: "Getu Valley, Guizhou Province. Highlight: Dani Andrada sends his 7-pitch project Corazon de Ensueno (8c/5.14b)."
  },
  {
    id: "QllWNEGBKic",
    title: "Petzl RocTrip Argentina 2012",
    type: "youtube",
    description: "Piedra Parada, Argentina. Highlight: 200-meter monolith and La Buitrera Canyon."
  },
  {
    id: "qKwrTBJDtUM",
    title: "Psicobloc Masters 2015",
    type: "youtube",
    description: "Climbing comp on a 55 ft. wall overhanging the Olympic swimming pool in Park City, Utah."
  },
  {
    id: "syjhX4lJcjk",
    title: "Psicobloc Masters 2014",
    type: "youtube",
    description: ""
  },
  {
    id: "T0KOIf1UC8E",
    title: "Psicobloc Masters 2013",
    type: "youtube",
    description: ""
  },
  {
    id: "D3bURXwT4kw",
    title: "Top Male Climbers Compared",
    type: "youtube",
    description: "Udo Neumann compares climbers side by side in the European Bouldering Championships, Innsbruck 2015."
  },
  {
    id: "6j-eEh_oXpE",
    title: "Slow Moments - Bouldering World Cup 2016",
    type: "youtube",
    description: "Slow motion moments. GoPro Mountain Games, Vail Colorado."
  },
  {
    id: "Y6Ak7GxoVjE",
    title: "Slow Moments - Bouldering World Cup 2015",
    type: "youtube",
    description: ""
  },
  {
    id: "SOsT1lEYp7A",
    title: "Slow Moments - Bouldering World Cup 2014",
    type: "youtube",
    description: ""
  },
  {
    id: "JCqe96jtExU",
    title: "Chris Sharma - First Round First Minute (9b)",
    type: "youtube",
    description: "Christ Sharma sending First Round, First Minute (9b/5.15b) in Margalef, Spain."
  },
  {
    id: "oOz54X3liF0",
    title: "Chris Sharma - Players",
    type: "youtube",
    description: "Spotlight on Sharma's climbing style."
  },
  {
    id: "48791021",
    title: "Chris Sharma - Back in Ceuse",
    type: "vimeo",
    description: "Chris Sharma in Ceuse, climbing established lines and bolting a new route."
  },
  {
    id: "lwtdmaYI7WQ",
    title: "La Sportiva Legends Only 2014",
    type: "youtube",
    description: "A bouldering competition featuring legendary climbers: Webb, Ondra, Hojer, Megos, Woods, Kruder."
  },
  {
    id: "I-OdxfCrXe4",
    title: "Kevin Jorgeson - The Groove (E11)",
    type: "youtube",
    description: "From the full-length film PROGRESSION."
  },
  {
    id: "tiei213j3Q0",
    title: "Matt Gentile - Pink Lightening Ultra (V13)",
    type: "youtube",
    description: "2015 Roof Rally, held at The Priest Draw in Flagstaff, AZ."
  },
  {
    id: "Sq_HcaYPRw8",
    title: "23rd Hueco Rock Rodeo - 2016",
    type: "youtube",
    description: ""
  },
  {
    id: "8-z5XrhrIoQ",
    title: "Ashima - Return of the Warrior Ninja Princess",
    type: "youtube",
    description: "Ashima Shiraishi, Hueco Tanks, TX, 2012. Featuring Crown of Aragorn (V13) and Barefoot on Sacred Ground (V12) at the age of 10."
  },
  {
    id: "170461426",
    title: "Extraordinary Dirtbagging",
    type: "vimeo",
    description: "7a to 8a climbing featuring the Victoria range, Taipan Wall, Arapiles in the Grampians, Australia."
  },
  {
    id: "111243939",
    title: "It's Called Epic - Magic Wood",
    type: "vimeo",
    description: "7a to 8a bouldering in Magic Wood."
  },
  {
    id: "g6SyZa90fnM",
    title: "Virgin Gorda - Paradise Bouldering",
    type: "youtube",
    description: "LT11 explores the beautiful beaches, searches for first ascents in one of the Caribbean's finest climbing destinations."
  },
  {
    id: "34989417",
    title: "Park Life - Yosemite Bouldering",
    type: "vimeo",
    description: "The Louder Than 11 crew gathered from all corners of the country to experience Yosemite Valley bouldering."
  },
  {
    id: "49116780",
    title: "ABYSS - North America's Highest Bouldering",
    type: "vimeo",
    description: "ABYSS provides an insider's look at rock climbing development."
  },
  {
    id: "DfXje1llHfg",
    title: "Focus Climbing Center - Fight the Pump",
    type: "youtube",
    description: "Promo video of Fight The Pump Endurance Route Comp at Focus Climbing Center. Nice show of technique."
  }
]
