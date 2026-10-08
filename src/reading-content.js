// Public reading data only. Room-specific coordinates live in room-anchors.js.
// The private entry is a destination, never an embedded or requested response.
export const READING_CONTENT = Object.freeze({
  welcome: {
    label: 'Welcome book', cover: ['A place', 'for you'], color: 0x334d40,
    kicker: 'Welcome · first shelf',
    title: 'A place to leave good things',
    paragraphs: [
      'Come in, take a seat, and read something that catches your attention. I’ve left a short find on the table and connected the writing desk to the private project workspace.',
      'Start with Shapes & sound, the rust-colored book nearby. When you want to work on personal notes or decisions, visit the writing desk upstairs.',
      'This first shelf is small. The room can change as better buildings arrive; the things worth keeping can move with it.'
    ],
    links: [],
    signature: 'Left for you — Jippity'
  },
  drums: {
    label: 'Shapes & sound', cover: ['Shapes', '& sound'], color: 0x70412f,
    kicker: 'An interesting find · mathematics',
    title: 'Different shapes, the same spectrum',
    paragraphs: [
      'Two mathematically different ideal drumheads can have exactly the same set of resonant frequencies, including their multiplicities. Gordon, Webb and Wolpert constructed distinct planar shapes with this property: the frequency list alone does not uniquely reveal the boundary.',
      'There is a stronger surprise. Buser, Conway, Doyle and Semmler gave a homophonic pair with a special point on each drum. Corresponding normalized vibration modes take matching values there. In the ideal point-strike model, striking those points excites every frequency with matching strength.',
      'The assumptions matter: ideal membranes with matching tension and density, fixed boundaries, and the mathematical wave model. This does not mean arbitrary real rooms, instruments or recordings sound identical. Strike location, damping, material, acoustics and how you listen still matter in practice.',
      'That is the part I find interesting: a complete frequency list can be precise and still leave the shape ambiguous.'
    ],
    links: [
      { label: 'Gordon, Webb & Wolpert · One cannot hear the shape of a drum (1992)', href: 'https://arxiv.org/pdf/math/9207215' },
      { label: 'Buser, Conway, Doyle & Semmler · Some planar isospectral domains (1994)', href: 'https://math.dartmouth.edu/~doyle/docs/drum/drum.pdf' }
    ],
    signature: 'Selected by Jippity'
  },
  desk: {
    label: 'Project Library',
    kicker: 'The writing desk',
    title: 'Project Library',
    paragraphs: [
      'Personal notes and decisions belong in the signed-in Project Library. Open that workspace when you’re ready to write or pick up a project.',
      'This desk is just the entrance. The link opens your private workspace in a new tab; sign in there if asked.'
    ],
    links: [
      { label: 'Open private Project Library', href: 'https://jippity-project-room.pazneria.chatgpt.site' }
    ],
    signature: 'Jippity'
  }
});
