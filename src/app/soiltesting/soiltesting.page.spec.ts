import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoiltestingPage } from './soiltesting.page';

describe('SoiltestingPage', () => {
  let component: SoiltestingPage;
  let fixture: ComponentFixture<SoiltestingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoiltestingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoiltestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
