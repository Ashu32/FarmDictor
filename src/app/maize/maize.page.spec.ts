import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaizePage } from './maize.page';

describe('MaizePage', () => {
  let component: MaizePage;
  let fixture: ComponentFixture<MaizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
