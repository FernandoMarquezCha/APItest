import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnumbersComponent } from './partnumbers.component';

describe('PartnumbersComponent', () => {
  let component: PartnumbersComponent;
  let fixture: ComponentFixture<PartnumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
