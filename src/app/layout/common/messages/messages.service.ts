import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from 'app/layout/common/messages/messages.types';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MessagesService
{
    // Private
    private _messages: BehaviorSubject<Message[] | null>;

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
        this._messages = new BehaviorSubject(null);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for messages
     */
    get messages$(): Observable<Message[]>
    {
        return this._messages.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Store messages on the service
     *
     * @param messages
     */
    store(messages: Message[]): Observable<Message[]>
    {
        // Load the messages
        this._messages.next(messages);

        // Return the messages
        return this.messages$;
    }

    /**
     * Create a message
     *
     * @param message
     */
    create(message: Message): Observable<Message>
    {
        return this.messages$.pipe(
            take(1),
            switchMap(messages => this._httpClient.post<Message>('api/common/messages', {message}).pipe(
                map((newMessage) => {

                    // Update the messages with the new message
                    this._messages.next([...messages, newMessage]);

                    // Return the new message from observable
                    return newMessage;
                })
            ))
        );
    }

    /**
     * Update the message
     *
     * @param id
     * @param message
     */
    update(id: string, message: Message): Observable<Message>
    {
        return this.messages$.pipe(
            take(1),
            switchMap(messages => this._httpClient.patch<Message>('api/common/messages', {
                id,
                message
            }).pipe(
                map((updatedMessage: Message) => {

                    // Find the index of the updated message
                    const index = messages.findIndex(item => item.id === id);

                    // Update the message
                    messages[index] = updatedMessage;

                    // Update the messages
                    this._messages.next(messages);

                    // Return the updated message
                    return updatedMessage;
                })
            ))
        );
    }

    /**
     * Delete the message
     *
     * @param id
     */
    delete(id: string): Observable<boolean>
    {
        return this.messages$.pipe(
            take(1),
            switchMap(messages => this._httpClient.delete<boolean>('api/common/messages', {params: {id}}).pipe(
                map((isDeleted: boolean) => {

                    // Find the index of the deleted message
                    const index = messages.findIndex(item => item.id === id);

                    // Delete the message
                    messages.splice(index, 1);

                    // Update the messages
                    this._messages.next(messages);

                    // Return the deleted status
                    return isDeleted;
                })
            ))
        );
    }

    /**
     * Mark all messages as read
     */
    markAllAsRead(): Observable<boolean>
    {
        return this.messages$.pipe(
            take(1),
            switchMap(messages => this._httpClient.get<boolean>('api/common/messages/mark-all-as-read').pipe(
                map((isUpdated: boolean) => {

                    // Go through all messages and set them as read
                    messages.forEach((message, index) => {
                        messages[index].read = true;
                    });

                    // Update the messages
                    this._messages.next(messages);

                    // Return the updated status
                    return isUpdated;
                })
            ))
        );
    }
}
