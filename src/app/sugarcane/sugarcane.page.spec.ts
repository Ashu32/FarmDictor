import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SugarcanePage } from './sugarcane.page';

describe('SugarcanePage', () => {
  let component: SugarcanePage;
  let fixture: ComponentFixture<SugarcanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarcanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SugarcanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
