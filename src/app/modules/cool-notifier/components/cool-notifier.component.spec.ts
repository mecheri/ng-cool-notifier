import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolNotifierComponent } from './cool-notifier.component';

describe('MmiNotifrComponent', () => {
  let component: CoolNotifierComponent;
  let fixture: ComponentFixture<CoolNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoolNotifierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
