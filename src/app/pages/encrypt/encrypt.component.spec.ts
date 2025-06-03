import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptPage } from './encrypt.component';

describe('EncryptComponent', () => {
  let component: EncryptPage;
  let fixture: ComponentFixture<EncryptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncryptPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncryptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
