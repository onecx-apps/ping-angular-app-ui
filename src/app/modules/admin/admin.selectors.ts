import { createFeatureSelector } from '@ngrx/store';
import { AdminState } from './admin.state';

export const adminFeatureKey = 'admin';

export const selectAdminFeature =
  createFeatureSelector<AdminState>(adminFeatureKey);
