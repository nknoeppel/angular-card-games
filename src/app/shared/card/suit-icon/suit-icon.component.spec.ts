import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitIconComponent } from './suit-icon.component';

describe('SuitIconComponent', () => {
  let component: SuitIconComponent;
  let fixture: ComponentFixture<SuitIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
