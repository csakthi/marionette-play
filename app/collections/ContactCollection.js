/**
 * Created by sakthi on 8/7/14.
 */

define([
    'backbone',
    'models/Contact'
], function (Backbone, Contact) {
    var ContactCollection = Backbone.Collection.extend({
        model: Contact
    });
    return ContactCollection;
});