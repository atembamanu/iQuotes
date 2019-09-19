import { Quote } from './quote';

describe('QuoteModel', () => {
  it('should create an instance', () => {
    expect(new Quote(1, 'Angular', 'Atemba', 'John Doe')).toBeTruthy();
  });
});
