import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatconfirmdialogueComponent } from './matconfirmdialogue.component';

describe('MatconfirmdialogueComponent', () => {
  let component: MatconfirmdialogueComponent;
  let fixture: ComponentFixture<MatconfirmdialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatconfirmdialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatconfirmdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
