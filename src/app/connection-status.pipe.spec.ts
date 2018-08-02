import { ConnectionStatusPipe } from './connection-status.pipe';

describe('ConnectionStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ConnectionStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
