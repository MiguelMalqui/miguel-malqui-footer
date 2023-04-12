import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelMalquiFooterComponent } from './miguel-malqui-footer.component';

describe('MiguelMalquiFooterComponent', () => {
  let component: MiguelMalquiFooterComponent;
  let fixture: ComponentFixture<MiguelMalquiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiguelMalquiFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiguelMalquiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
