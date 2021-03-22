import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Shortcut } from 'app/layout/common/shortcuts/shortcuts.types';
import { Notification } from 'app/layout/common/notifications/notifications.types';

@Injectable({
    providedIn: 'root'
})
export class ShortcutsService
{
    // Private
    private _shortcuts: BehaviorSubject<Shortcut[] | null>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the private defaults
        this._shortcuts = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for shortcuts
     */
    get shortcuts$(): Observable<Shortcut[]>
    {
        return this._shortcuts.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Store shortcuts on the service
     *
     * @param shortcuts
     */
    store(shortcuts: Shortcut[]): Observable<Shortcut[]>
    {
        // Load the shortcuts
        this._shortcuts.next(shortcuts);

        // Return the shortcuts
        return this.shortcuts$;
    }

    /**
     * Create a shortcut
     *
     * @param shortcut
     */
    create(shortcut: Shortcut): Observable<Shortcut>
    {
        return this.shortcuts$.pipe(
            take(1),
            switchMap(shortcuts => this._httpClient.post<Shortcut>('api/common/shortcuts', {shortcut}).pipe(
                map((newShortcut) => {

                    // Update the shortcuts with the new shortcut
                    this._shortcuts.next([...shortcuts, newShortcut]);

                    // Return the new shortcut from observable
                    return newShortcut;
                })
            ))
        );
    }

    /**
     * Update the shortcut
     *
     * @param id
     * @param shortcut
     */
    update(id: string, shortcut: Shortcut): Observable<Shortcut>
    {
        return this.shortcuts$.pipe(
            take(1),
            switchMap(shortcuts => this._httpClient.patch<Shortcut>('api/common/shortcuts', {
                id,
                shortcut
            }).pipe(
                map((updatedShortcut: Shortcut) => {

                    // Find the index of the updated shortcut
                    const index = shortcuts.findIndex(item => item.id === id);

                    // Update the shortcut
                    shortcuts[index] = updatedShortcut;

                    // Update the shortcuts
                    this._shortcuts.next(shortcuts);

                    // Return the updated shortcut
                    return updatedShortcut;
                })
            ))
        );
    }

    /**
     * Delete the shortcut
     *
     * @param id
     */
    delete(id: string): Observable<boolean>
    {
        return this.shortcuts$.pipe(
            take(1),
            switchMap(shortcuts => this._httpClient.delete<boolean>('api/common/shortcuts', {params: {id}}).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted shortcut
                    const index = shortcuts.findIndex(item => item.id === id);

                    // Delete the shortcut
                    shortcuts.splice(index, 1);

                    // Update the shortcuts
                    this._shortcuts.next(shortcuts);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }

}
