import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestjwtComponent } from './testjwt.component';

describe('TestjwtComponent', () => {
  let component: TestjwtComponent;
  let fixture: ComponentFixture<TestjwtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestjwtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestjwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
