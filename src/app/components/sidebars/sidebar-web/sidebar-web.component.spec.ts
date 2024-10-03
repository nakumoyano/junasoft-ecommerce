import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWebComponent } from './sidebar-web.component';

describe('SidebarWebComponent', () => {
  let component: SidebarWebComponent;
  let fixture: ComponentFixture<SidebarWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarWebComponent]
    });
    fixture = TestBed.createComponent(SidebarWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
