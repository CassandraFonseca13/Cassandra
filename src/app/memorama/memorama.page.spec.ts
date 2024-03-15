import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoramaPage } from './memorama.page';

describe('MemoramaPage', () => {
  let component: MemoramaPage;
  let fixture: ComponentFixture<MemoramaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoramaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
