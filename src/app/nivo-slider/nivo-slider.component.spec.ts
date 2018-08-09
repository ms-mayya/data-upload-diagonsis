import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivoSliderComponent } from './nivo-slider.component';

describe('NivoSliderComponent', () => {
  let component: NivoSliderComponent;
  let fixture: ComponentFixture<NivoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
