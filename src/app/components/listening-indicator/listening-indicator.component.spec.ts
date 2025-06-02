import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningIndicatorComponent } from './listening-indicator.component';

describe('ListeningIndicatorComponent', () => {
  let component: ListeningIndicatorComponent;
  let fixture: ComponentFixture<ListeningIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeningIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeningIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
