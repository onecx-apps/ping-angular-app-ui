import { createFeatureSelector } from '@ngrx/store';
import { FeatureState } from './feature.state';

export const featureKey = 'feature';

export const selectFeature = createFeatureSelector<FeatureState>(featureKey);
