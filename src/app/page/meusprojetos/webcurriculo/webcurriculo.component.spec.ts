import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcurriculoComponent } from './webcurriculo.component';

describe('WebcurriculoComponent', () => {
  let component: WebcurriculoComponent;
  let fixture: ComponentFixture<WebcurriculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcurriculoComponent]
    });
    fixture = TestBed.createComponent(WebcurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
