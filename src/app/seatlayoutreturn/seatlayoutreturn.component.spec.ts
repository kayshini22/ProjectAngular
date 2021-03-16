import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatlayoutreturnComponent } from './seatlayoutreturn.component';

describe('SeatlayoutreturnComponent', () => {
  let component: SeatlayoutreturnComponent;
  let fixture: ComponentFixture<SeatlayoutreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatlayoutreturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatlayoutreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
