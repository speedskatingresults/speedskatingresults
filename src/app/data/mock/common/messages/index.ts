import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { TreoMockApiUtils } from '@treo/lib/mock-api/mock-api.utils';
import { messages as messagesData } from 'app/data/mock/common/messages/data';

@Injectable({
    providedIn: 'root'
})
export class MessagesMockApi implements TreoMockApi
{
    // Private
    private _messages: any;

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
        this._messages = messagesData;

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
        // @ Messages - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/common/messages')
            .reply(() => {
                return [
                    200,
                    {
                        messages: cloneDeep(this._messages)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Messages - POST
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPost('api/common/messages')
            .reply((request) => {

                // Get the message
                const newMessage = cloneDeep(request.body.message);

                // Generate a new GUID
                newMessage.id = TreoMockApiUtils.guid();

                // Unshift the new message
                this._messages.unshift(newMessage);

                return [
                    200,
                    newMessage
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Messages - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPatch('api/common/messages')
            .reply((request) => {

                // Get the id and message
                const id = request.body.id;
                const message = cloneDeep(request.body.message);

                // Prepare the updated message
                let updatedMessage = null;

                // Find the message and update it
                this._messages.forEach((item, index, messages) => {

                    if ( item.id === id )
                    {
                        // Update the message
                        messages[index] = assign({}, messages[index], message);

                        // Store the updated message
                        updatedMessage = messages[index];
                    }
                });

                return [
                    200,
                    updatedMessage
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Messages - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onDelete('api/common/messages')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Prepare the deleted message
                let deletedMessage = null;

                // Find the message
                const index = this._messages.findIndex((item) => item.id === id);

                // Store the deleted message
                deletedMessage = cloneDeep(this._messages[index]);

                // Delete the message
                this._messages.splice(index, 1);

                return [
                    200,
                    deletedMessage
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Mark all as read - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/common/messages/mark-all-as-read')
            .reply(() => {

                // Go through all messages
                this._messages.forEach((item, index, messages) => {

                    // Mark it as read
                    messages[index].read = true;
                    messages[index].seen = true;
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
            .onPost('api/common/messages/toggle-read-status')
            .reply((request) => {

                // Get the message
                const message = cloneDeep(request.body.message);

                // Prepare the updated message
                let updatedMessage = null;

                // Find the message and update it
                this._messages.forEach((item, index, messages) => {

                    if ( item.id === message.id )
                    {
                        // Update the message
                        messages[index].read = message.read;

                        // Store the updated message
                        updatedMessage = messages[index];
                    }
                });

                return [
                    200,
                    updatedMessage
                ];
            });
    }
}
