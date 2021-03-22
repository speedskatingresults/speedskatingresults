import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { TreoMockApiUtils } from '@treo/lib/mock-api/mock-api.utils';
import { notifications as notificationsData } from 'app/data/mock/common/notifications/data';

@Injectable({
    providedIn: 'root'
})
export class NotificationsMockApi implements TreoMockApi
{
    // Private
    private _notifications: any;

    /**
     * Constructor
     *
     * @param {TreoMockApiService} _treoMockApiService
     */
    constructor(
        private _treoMockApiService: TreoMockApiService
    )
    {
        // Set the data
        this._notifications = notificationsData;

        // Register the API endpoints
        this.register();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register
     */
    register(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/common/notifications')
            .reply(() => {
                return [
                    200,
                    {
                        notifications: cloneDeep(this._notifications)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - POST
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPost('api/common/notifications')
            .reply((request) => {

                // Get the notification
                const newNotification = cloneDeep(request.body.notification);

                // Generate a new GUID
                newNotification.id = TreoMockApiUtils.guid();

                // Unshift the new notification
                this._notifications.unshift(newNotification);

                return [
                    200,
                    newNotification
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPatch('api/common/notifications')
            .reply((request) => {

                // Get the id and notification
                const id = request.body.id;
                const notification = cloneDeep(request.body.notification);

                // Prepare the updated notification
                let updatedNotification = null;

                // Find the notification and update it
                this._notifications.forEach((item, index, notifications) => {

                    if ( item.id === id )
                    {
                        // Update the notification
                        notifications[index] = assign({}, notifications[index], notification);

                        // Store the updated notification
                        updatedNotification = notifications[index];
                    }
                });

                return [
                    200,
                    updatedNotification
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Notifications - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onDelete('api/common/notifications')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Prepare the deleted notification
                let deletedNotification = null;

                // Find the notification
                const index = this._notifications.findIndex((item) => item.id === id);

                // Store the deleted notification
                deletedNotification = cloneDeep(this._notifications[index]);

                // Delete the notification
                this._notifications.splice(index, 1);

                return [
                    200,
                    deletedNotification
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mark all as read - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/common/notifications/mark-all-as-read')
            .reply(() => {

                // Go through all notifications
                this._notifications.forEach((item, index, notifications) => {

                    // Mark it as read
                    notifications[index].read = true;
                    notifications[index].seen = true;
                });

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Toggle read status - POST
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPost('api/common/notifications/toggle-read-status')
            .reply((request) => {

                // Get the notification
                const notification = cloneDeep(request.body.notification);

                // Prepare the updated notification
                let updatedNotification = null;

                // Find the notification and update it
                this._notifications.forEach((item, index, notifications) => {

                    if ( item.id === notification.id )
                    {
                        // Update the notification
                        notifications[index].read = notification.read;

                        // Store the updated notification
                        updatedNotification = notifications[index];
                    }
                });

                return [
                    200,
                    updatedNotification
                ];
            });
    }
}
