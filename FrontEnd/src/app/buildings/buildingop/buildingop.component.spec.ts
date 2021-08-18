import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingopComponent } from './buildingop.component';

describe('BuildingopComponent', () => {
  let component: BuildingopComponent;
  let fixture: ComponentFixture<BuildingopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
