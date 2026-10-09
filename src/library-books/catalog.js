import drums from '../jippity-book/content.json';
import welcome from './welcome.json';
import notebook from './notebook.json';

// Explicit public editions. A signed-in destination remains in reading-content.js.
// Content IDs describe editions; placement IDs describe copies in a building.
export const BOOK_CATALOG = Object.freeze({
  drums: { content: drums, summary: 'A small study of shared resonances, with two primary papers.',
    palette: {} },
  welcome: { content: welcome, summary: 'A short welcome and a guide to the first shelf.',
    palette: { cloth: '#334d40', ribbon: '#ad7653' } },
  notebook: { content: notebook, summary: 'A public sample of useful project notes, ready to adapt.',
    colorSize: 512, palette: { cloth: '#603d45', ribbon: '#7d8c65' } }
});
