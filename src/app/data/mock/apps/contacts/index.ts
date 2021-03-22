import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { assign, cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiUtils } from '@treo/lib/mock-api/mock-api.utils';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { contacts as contactsData, countries as countriesData, tags as tagsData } from 'app/data/mock/apps/contacts/data';

@Injectable({
    providedIn: 'root'
})
export class ContactsMockApi implements TreoMockApi
{
    // Private
    private _contacts: any[];
    private _countries: any[];
    private _tags: any[];

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
        this._contacts = contactsData;
        this._countries = countriesData;
        this._tags = tagsData;

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
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/apps/contacts/all')
            .reply(() => {

                // Clone the contacts
                const contacts = cloneDeep(this._contacts);

                // Sort the contacts by the name field by default
                contacts.sort((a, b) => a.name.localeCompare(b.name));

                return [
                    200,
                    contacts
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contacts Search - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/apps/contacts/search')
            .reply((request) => {

                // Get the search query
                const query = request.params.get('query');

                // Clone the contacts
                let contacts = cloneDeep(this._contacts);

                // If the query exists...
                if ( query )
                {
                    // Filter the contacts
                    contacts = contacts.filter((contact) => {
                        return contact.name && contact.name.toLowerCase().includes(query.toLowerCase());
                    });
                }

                // Sort the contacts by the name field by default
                contacts.sort((a, b) => a.name.localeCompare(b.name));

                return [
                    200,
                    contacts
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/apps/contacts/contact')
            .reply((request) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the contacts
                const contacts = cloneDeep(this._contacts);

                // Find the contact
                const contact = contacts.find((item) => {
                    return item.id === id;
                });

                return [
                    200,
                    contact
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - POST
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPost('api/apps/contacts/contact')
            .reply(() => {

                // Generate a new contact
                const newContact = {
                    id          : TreoMockApiUtils.guid(),
                    avatar      : null,
                    name        : 'New Contact',
                    emails      : [],
                    phoneNumbers: [],
                    job         : {
                        title  : '',
                        company: ''
                    },
                    birthday    : null,
                    address     : null,
                    notes       : null,
                    tags        : []
                };

                // Unshift the new contact
                this._contacts.unshift(newContact);

                return [
                    200,
                    newContact
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPatch('api/apps/contacts/contact')
            .reply((request) => {

                // Get the id and contact
                const id = request.body.id;
                const contact = cloneDeep(request.body.contact);

                // Prepare the updated contact
                let updatedContact = null;

                // Find the contact and update it
                this._contacts.forEach((item, index, contacts) => {

                    if ( item.id === id )
                    {
                        // Update the contact
                        contacts[index] = assign({}, contacts[index], contact);

                        // Store the updated contact
                        updatedContact = contacts[index];
                    }
                });

                return [
                    200,
                    updatedContact
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Contact - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onDelete('api/apps/contacts/contact')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Find the contact and delete it
                this._contacts.forEach((item, index) => {

                    if ( item.id === id )
                    {
                        this._contacts.splice(index, 1);
                    }
                });

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Countries - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/apps/contacts/countries')
            .reply(() => {

                return [
                    200,
                    cloneDeep(this._countries)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/apps/contacts/tags')
            .reply(() => {

                return [
                    200,
                    cloneDeep(this._tags)
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - POST
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPost('api/apps/contacts/tag')
            .reply((request) => {

                // Get the tag
                const newTag = cloneDeep(request.body.tag);

                // Generate a new GUID
                newTag.id = TreoMockApiUtils.guid();

                // Unshift the new tag
                this._tags.unshift(newTag);

                return [
                    200,
                    newTag
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tags - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPatch('api/apps/contacts/tag')
            .reply((request) => {

                // Get the id and tag
                const id = request.body.id;
                const tag = cloneDeep(request.body.tag);

                // Prepare the updated tag
                let updatedTag = null;

                // Find the tag and update it
                this._tags.forEach((item, index, tags) => {

                    if ( item.id === id )
                    {
                        // Update the tag
                        tags[index] = assign({}, tags[index], tag);

                        // Store the updated tag
                        updatedTag = tags[index];
                    }
                });

                return [
                    200,
                    updatedTag
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Tag - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onDelete('api/apps/contacts/tag')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Find the tag and delete it
                this._tags.forEach((item, index) => {

                    if ( item.id === id )
                    {
                        this._tags.splice(index, 1);
                    }
                });

                // Get the contacts that have the tag
                const contactsWithTag = this._contacts.filter(contact => contact.tags.indexOf(id) > -1);

                // Iterate through them and delete the tag
                contactsWithTag.forEach((contact) => {
                    contact.tags.splice(contact.tags.indexOf(id), 1);
                });

                return [
                    200,
                    true
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Avatar - POST
        // -----------------------------------------------------------------------------------------------------

        /**
         * Read the given file as data url
         *
         * @param file
         */
        const readAsDataURL = (file: File): Promise<any> => {

            // Return a new promise
            return new Promise((resolve, reject) => {

                // Create a new reader
                const reader = new FileReader();

                // Resolve the promise on success
                reader.onload = () => {
                    resolve(reader.result);
                };

                // Reject the promise on error
                reader.onerror = (e) => {
                    reject(e);
                };

                // Read the file as the
                reader.readAsDataURL(file);
            });
        };

        this._treoMockApiService
            .onPost('api/apps/contacts/avatar')
            .reply((request) => {

                // Get the id and avatar
                const id = request.body.id;
                const avatar = request.body.avatar;

                // Prepare the updated contact
                let updatedContact = null;

                // In a real world application, this would return the path
                // of the saved image file (from host, S3 bucket, etc.) but,
                // for the sake of the demo, we encode the image to base64
                // and return it as the new path of the uploaded image since
                // the src attribute of the img tag works with both image urls
                // and encoded images.
                return from(readAsDataURL(avatar)).pipe(
                    map((path) => {

                        // Find the contact and update it
                        this._contacts.forEach((item, index, contacts) => {

                            if ( item.id === id )
                            {
                                // Update the avatar
                                contacts[index].avatar = path;

                                // Store the updated contact
                                updatedContact = contacts[index];
                            }
                        });

                        return [200, updatedContact];
                    })
                );
            });
    }
}
