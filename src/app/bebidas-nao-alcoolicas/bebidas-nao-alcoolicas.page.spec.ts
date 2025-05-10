import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasNaoAlcoolicasPage } from './bebidas-nao-alcoolicas.page';

describe('BebidasNaoAlcoolicasPage', () => {
  let component: BebidasNaoAlcoolicasPage;
  let fixture: ComponentFixture<BebidasNaoAlcoolicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasNaoAlcoolicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
