import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetflightsComponent } from './getflights.component';

describe('GetflightsComponent', () => {
  let component: GetflightsComponent;
  let fixture: ComponentFixture<GetflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
