import { UpperStringPipe } from './upper-string.pipe';

describe('UpperStringPipe', () => {
  it('create an instance', () => {
    const pipe = new UpperStringPipe();
    expect(pipe).toBeTruthy();
  });
});
