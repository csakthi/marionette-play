/**
 * Created by sakthi on 8/7/14.
 */
define([
    'marionette',
    'views/ContactView'
], function (Marionette, ContactView) {

    var ContactCollectionView = Marionette.CollectionView.extend({
        itemView: ContactView
    });
    return ContactCollectionView;
});
