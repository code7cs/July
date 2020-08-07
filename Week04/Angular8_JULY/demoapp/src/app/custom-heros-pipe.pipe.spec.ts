import { CustomHerosPipePipe } from './custom-heros-pipe.pipe';

describe('CustomHerosPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomHerosPipePipe();
    expect(pipe).toBeTruthy();
  });
});
