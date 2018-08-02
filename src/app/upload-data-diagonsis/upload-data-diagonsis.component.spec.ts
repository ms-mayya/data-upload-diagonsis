import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDataDiagonsisComponent } from './upload-data-diagonsis.component';

describe('UploadDataDiagonsisComponent', () => {
  let component: UploadDataDiagonsisComponent;
  let fixture: ComponentFixture<UploadDataDiagonsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDataDiagonsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDataDiagonsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
