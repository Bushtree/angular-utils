import { ObservableComponent } from './observable.component';
import { count } from 'rxjs/operators';

class DerivedComponent extends ObservableComponent {
  constructor() {
    super();
  }

  get subject() {
    return this.ngUnsubscribe$;
  }
}

describe('AngularUtilsCoreComponent', () => {
  let component: DerivedComponent;

  beforeEach(() => {
    component = new DerivedComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDestroy', () => {
    it('should call unsubscribe and complete', () => {
      let completed = false;
      component.subject.pipe(count()).subscribe(_ => expect(_).toBeGreaterThan(0), () => fail(), () => completed = true);
      component.ngOnDestroy();
      expect(completed).toBeTruthy();
    });
  });
});
