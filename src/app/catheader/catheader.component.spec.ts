import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatheaderComponent } from './catheader.component';

describe('CatheaderComponent', () => {
  let component: CatheaderComponent;
  let fixture: ComponentFixture<CatheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
