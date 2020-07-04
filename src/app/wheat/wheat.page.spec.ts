import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WheatPage } from './wheat.page';

describe('WheatPage', () => {
  let component: WheatPage;
  let fixture: ComponentFixture<WheatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WheatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
