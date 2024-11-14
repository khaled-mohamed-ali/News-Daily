import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSizeCardComponent } from './mid-size-card.component';

describe('MidSizeCardComponent', () => {
  let component: MidSizeCardComponent;
  let fixture: ComponentFixture<MidSizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidSizeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidSizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
