import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockepitComponent } from './cockepit.component';

describe('CockepitComponent', () => {
  let component: CockepitComponent;
  let fixture: ComponentFixture<CockepitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockepitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockepitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
