import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPsuedoComponent } from './market-psuedo.component';

describe('MarketPsuedoComponent', () => {
  let component: MarketPsuedoComponent;
  let fixture: ComponentFixture<MarketPsuedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPsuedoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPsuedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
