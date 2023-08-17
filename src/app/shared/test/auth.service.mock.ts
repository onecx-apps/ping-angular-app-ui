import { IAuthService, UserProfile } from '@onecx/portal-integration-angular';
import { BehaviorSubject } from 'rxjs';

export class AuthServiceMock implements IAuthService {
  currentUser$ = new BehaviorSubject<UserProfile>({
    person: {},
    userId: 'userId',
  });

  getCurrentUser(): UserProfile {
    return this.currentUser$.value;
  }
  logout(): void {
    /* do nothing */
  }
  hasPermission(permissionKey: string): boolean {
    return true;
  }
  getAuthProviderName(): string {
    return 'mock';
  }
  hasRole(role: string | string[]): boolean {
    return true;
  }
  init(): Promise<boolean> {
    return Promise.resolve(true);
  }
  getUserRoles(): string[] {
    return [];
  }
}
