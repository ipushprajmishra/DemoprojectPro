import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssClasseSelectorComponent } from './css-classe-selector.component';

describe('CssClasseSelectorComponent', () => {
  let component: CssClasseSelectorComponent;
  let fixture: ComponentFixture<CssClasseSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssClasseSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssClasseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
