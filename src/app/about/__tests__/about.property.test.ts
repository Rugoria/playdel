import * as fc from 'fast-check';
import { FULL_STORY_TEXT } from '../content';

// Feature: brand-story-about-page, Property 1: Full Story word count is between 150 and 200 words
describe('About Page — Property Tests', () => {
  it('Full_Story word count is always between 150 and 200 words', () => {
    fc.assert(
      fc.property(fc.constant(FULL_STORY_TEXT), (text) => {
        const wordCount = text.trim().split(/\s+/).length;
        return wordCount >= 150 && wordCount <= 200;
      }),
      { numRuns: 100 }
    );
  });
});
