import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsPickComponent } from './editors-pick.component';

describe('EditorsPickComponent', () => {
  let component: EditorsPickComponent;
  let fixture: ComponentFixture<EditorsPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorsPickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorsPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
