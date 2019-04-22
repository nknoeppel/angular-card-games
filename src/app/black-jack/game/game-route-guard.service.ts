import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlackJackService } from '../black-jack.service';

@Injectable()
export class GameRouteGuard implements CanActivate {

    constructor(private blackJackService: BlackJackService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.blackJackService || !this.blackJackService.settings) {
            this.router.navigateByUrl('/black-jack/settings');
            return false;
        }
        else {
            return true;
        }
    }
}