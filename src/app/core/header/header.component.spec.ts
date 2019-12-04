import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MenuComponent } from 'src/app/tareas/menu/menu.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MenuComponent
       ],
       imports: [
         RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    // component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Curso de Angular - CAS'`, () => {
    expect(component.titulo).toEqual('Curso de Angular - CAS');
  });

  it('should render title', () => {
    const rendered = fixture.debugElement.nativeElement;
    expect(rendered.querySelector('header h1').textContent).toContain('CAS');
  });

});
