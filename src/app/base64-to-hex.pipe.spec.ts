import { Base64ToHexPipe } from './base64-to-hex.pipe';

describe('Base64ToHexPipe', () => {
  it('create an instance', () => {
    const pipe = new Base64ToHexPipe();
    expect(pipe).toBeTruthy();
  });
});
