import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CropinfoPage } from './cropinfo.page';

describe('CropinfoPage', () => {
  let component: CropinfoPage;
  let fixture: ComponentFixture<CropinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CropinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
