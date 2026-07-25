const allContent = [

    // NavBar
    {
        title: 'Navbar',
        text: 'Home Team Drone Timeline Testing Tips',
        url: '/#navbar'
    },

    // TEAM
    {
    title: "Team Page",
    text: "project lead subteam leads members engineering teams",
    url: "/team"
    },

  // DRONE
  {
    title: "Drone Page",
    text: "airframe avionics propulsion payload battery structure software",
    url: "/drone"
  },

  // TIMELINE
  {
    title: "Timeline Page",
    text: "project milestones development phases competition schedule",
    url: "/timeline"
  },

  // TESTING
  {
    title: "Testing Page",
    text: "flight testing safety procedures system validation",
    url: "/testing"
  },

  // TIPS
  {
    title: "Tips Page",
    text: "guides documentation onboarding simulation helpful tips",
    url: "/tips"
  }
];


// ====== CLEAN VERSION FOR FUSE ======

const cleanContent = allContent
  .filter(c => c && typeof c === 'object')
  .map(c => ({
    title: typeof c.title === 'string' ? c.title : '',
    text: typeof c.text === 'string' ? c.text : '',
    url: c.url || ''
  }));

export default cleanContent;