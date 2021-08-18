import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnumberslistComponent } from './partnumberslist.component';

describe('PartnumberslistComponent', () => {
  let component: PartnumberslistComponent;
  let fixture: ComponentFixture<PartnumberslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnumberslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnumberslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
