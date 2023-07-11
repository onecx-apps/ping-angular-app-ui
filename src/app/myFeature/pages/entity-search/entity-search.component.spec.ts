import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule, Store } from '@ngrx/store';
import { EntitySearchComponent } from './entity-search.component';
import { EntitySearchActions } from './entity-search.actions';
import { By } from '@angular/platform-browser';
import { LetModule } from '@ngrx/component';
import { myFeatureFeature } from '../../myFeature.reducers';

describe('EntitySearchComponent', () => {
  let component: EntitySearchComponent;
  let fixture: ComponentFixture<EntitySearchComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        LetModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        StoreModule.forFeature(myFeatureFeature),
      ],
      declarations: [EntitySearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySearchComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('should dispatch searchClicked action when search button is clicked', () => {
    it('with empty query', () => {
      let query = '';
      fixture.debugElement.query(By.css('#query')).nativeElement.value = query;
      fixture.debugElement.query(By.css('#searchButton')).nativeElement.click();
      expect(store.dispatch).toHaveBeenCalledWith(
        EntitySearchActions.searchClicked({ query })
      );
    });

    it('with non-empty query', () => {
      let query = 'my query';
      fixture.debugElement.query(By.css('#query')).nativeElement.value = query;
      fixture.debugElement.query(By.css('#searchButton')).nativeElement.click();
      expect(store.dispatch).toHaveBeenCalledWith(
        EntitySearchActions.searchClicked({ query })
      );
    });
  });
});
