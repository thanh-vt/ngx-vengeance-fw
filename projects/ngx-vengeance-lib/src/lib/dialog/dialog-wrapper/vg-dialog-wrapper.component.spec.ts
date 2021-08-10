import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgDialogWrapperComponent } from './vg-dialog-wrapper.component';

describe('ModalComponent', () => {
  let component: VgDialogWrapperComponent;
  let fixture: ComponentFixture<VgDialogWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VgDialogWrapperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgDialogWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
