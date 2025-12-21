import {describe, it, expect} from 'vitest';
import * as main from './main.js';

describe('main', () => {
  it('should export correct names', () => {
    expect(main).toHaveProperty('n', 303);
  });
});
