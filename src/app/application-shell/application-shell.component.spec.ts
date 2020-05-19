import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationShellComponent } from './application-shell.component';

describe('ApplicationShellComponent', () => {
  let component: ApplicationShellComponent;
  let fixture: ComponentFixture<ApplicationShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
