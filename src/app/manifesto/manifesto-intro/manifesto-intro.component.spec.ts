import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestoIntroComponent } from './manifesto-intro.component';

describe('ManifestoIntroComponent', () => {
  let component: ManifestoIntroComponent;
  let fixture: ComponentFixture<ManifestoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
