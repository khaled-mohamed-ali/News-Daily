import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizeCardComponent } from './full-size-card.component';

describe('FullSizeCardComponent', () => {
  let component: FullSizeCardComponent;
  let fixture: ComponentFixture<FullSizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullSizeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullSizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
