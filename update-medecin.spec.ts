import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMedecin } from './update-medecin';

describe('UpdateMedecin', () => {
  let component: UpdateMedecin;
  let fixture: ComponentFixture<UpdateMedecin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMedecin],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMedecin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
