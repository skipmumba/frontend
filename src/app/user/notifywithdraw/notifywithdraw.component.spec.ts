import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifywithdrawComponent } from './notifywithdraw.component';

describe('NotifywithdrawComponent', () => {
  let component: NotifywithdrawComponent;
  let fixture: ComponentFixture<NotifywithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifywithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifywithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
