var onRun = function (context) {

    // old school variable
    var doc = context.document;
    var selection = context.selection;

    var scope = doc.currentPage().currentArtboard().children();

    // get layer groups
    var predicate = NSPredicate.predicateWithFormat("className == %@", "MSLayerGroup");
    var groups = scope.filteredArrayUsingPredicate(predicate);

    var layers = groups.objectEnumerator();

    if (groups[0].hasClickThrough() == true) {
        // disable click through
        while(layer = layers.nextObject()) {
            layer.setHasClickThrough(false);
        }
        doc.showMessage("Click through disabled")
    } else {
        // enable ClickTrough
        while(layer = layers.nextObject()){
            layer.setHasClickThrough(true);
        }
        doc.showMessage("Click through enabled")
    }
}