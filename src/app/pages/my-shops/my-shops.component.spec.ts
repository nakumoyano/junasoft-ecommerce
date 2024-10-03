import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopsComponent } from './my-shops.component';

describe('MyShopsComponent', () => {
  let component: MyShopsComponent;
  let fixture: ComponentFixture<MyShopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyShopsComponent]
    });
    fixture = TestBed.createComponent(MyShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
