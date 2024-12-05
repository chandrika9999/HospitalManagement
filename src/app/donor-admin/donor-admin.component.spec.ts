import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorAdminComponent } from './donor-admin.component';

describe('DonorAdminComponent', () => {
  let component: DonorAdminComponent;
  let fixture: ComponentFixture<DonorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonorAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
