import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingfooterComponent } from './buildingfooter.component';

describe('BuildingfooterComponent', () => {
  let component: BuildingfooterComponent;
  let fixture: ComponentFixture<BuildingfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
