import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeAuthFormComponent } from './fake-auth-form.component';

describe('FakeAuthFormComponent', () => {
  let component: FakeAuthFormComponent;
  let fixture: ComponentFixture<FakeAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeAuthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
