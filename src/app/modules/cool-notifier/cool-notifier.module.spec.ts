import { CoolNotifierModule } from './cool-notifier.module';

describe('MmiNotifrModule', () => {
  let coolNotifierModule: CoolNotifierModule;

  beforeEach(() => {
    coolNotifierModule = new CoolNotifierModule();
  });

  it('should create an instance', () => {
    expect(coolNotifierModule).toBeTruthy();
  });
});
