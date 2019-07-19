import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookPage } from './passbook.page';

describe('PassbookPage', () => {
  let component: PassbookPage;
  let fixture: ComponentFixture<PassbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
