import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeropComponent } from './customerop.component';

describe('CustomeropComponent', () => {
  let component: CustomeropComponent;
  let fixture: ComponentFixture<CustomeropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
