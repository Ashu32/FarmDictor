import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicePage } from './rice.page';

describe('RicePage', () => {
  let component: RicePage;
  let fixture: ComponentFixture<RicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
