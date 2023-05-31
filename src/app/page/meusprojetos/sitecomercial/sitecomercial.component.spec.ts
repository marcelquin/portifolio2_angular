import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitecomercialComponent } from './sitecomercial.component';

describe('SitecomercialComponent', () => {
  let component: SitecomercialComponent;
  let fixture: ComponentFixture<SitecomercialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitecomercialComponent]
    });
    fixture = TestBed.createComponent(SitecomercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
