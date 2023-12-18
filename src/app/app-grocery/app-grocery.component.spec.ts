import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGroceryComponent } from './app-grocery.component';

describe('AppGroceryComponent', () => {
  let component: AppGroceryComponent;
  let fixture: ComponentFixture<AppGroceryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppGroceryComponent]
    });
    fixture = TestBed.createComponent(AppGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
