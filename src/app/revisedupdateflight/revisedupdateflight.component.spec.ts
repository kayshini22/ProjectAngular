import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedupdateflightComponent } from './revisedupdateflight.component';

describe('RevisedupdateflightComponent', () => {
  let component: RevisedupdateflightComponent;
  let fixture: ComponentFixture<RevisedupdateflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisedupdateflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedupdateflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
