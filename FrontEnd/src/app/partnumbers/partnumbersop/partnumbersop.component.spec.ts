import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnumbersopComponent } from './partnumbersop.component';

describe('PartnumbersopComponent', () => {
  let component: PartnumbersopComponent;
  let fixture: ComponentFixture<PartnumbersopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnumbersopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnumbersopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
