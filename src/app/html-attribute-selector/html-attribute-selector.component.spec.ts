import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAttributeSelectorComponent } from './html-attribute-selector.component';

describe('HtmlAttributeSelectorComponent', () => {
  let component: HtmlAttributeSelectorComponent;
  let fixture: ComponentFixture<HtmlAttributeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlAttributeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlAttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
