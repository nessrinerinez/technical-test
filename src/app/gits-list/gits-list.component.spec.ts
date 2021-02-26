import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsListComponent } from './gits-list.component';

describe('GitsListComponent', () => {
  let component: GitsListComponent;
  let fixture: ComponentFixture<GitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
