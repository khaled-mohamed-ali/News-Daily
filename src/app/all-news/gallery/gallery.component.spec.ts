import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GALLERYComponent } from './gallery.component';

describe('GALLERYComponent', () => {
  let component: GALLERYComponent;
  let fixture: ComponentFixture<GALLERYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GALLERYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GALLERYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
