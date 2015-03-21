(function() {

angular
  .module('positioning_service_client_app')
  .factory('DoodlesService', DoodlesService);

  DoodlesService.$inject = ['ResourceService', '$q', '$cookieStore'];

  function DoodlesService(Resource, $q, $cookieStore) {

    var Doodle = Resource('doodles');

    return {
      getAll:function() {

        // var items = LocalStorage.get(LS.doodlesKey);

        var items;

        var deferred = $q.defer();

        if(!items) {
          
          Doodle.getCollection().then(function(data){

            // LocalStorage.set(LS.doodlesKey, data);

            deferred.resolve(data);
          });
        }
        else {
          console.log("Getting all the doodles from the cache");
          deferred.resolve(items);
        }

        return deferred.promise;
      },
      getFilteredDoodles:function(query) {

        var deferred = $q.defer();

        if(query.searchBy === "tag") {

          var Doodle = Resource('doodles_by_tag/' + query.term);

          Doodle.getCollection().then(function(data){
            deferred.resolve(data);
          });
          
          // http://localhost:3000/api/v1/doodles_by_tag/cooltag.json?offset=1&limit=2

        } else if(query.searchBy === "username") {
          // http://localhost:3000/api/v1/user/<insert user_id>/doodles.json

          var Doodle = Resource('users/username/' + query.term + '/doodles');

          Doodle.getCollection().then(function(data){
            deferred.resolve(data);
          });

        } else if(query.searchBy === "all") {
          // http://localhost:3000/api/v1/doodles.json?q=malmö

          //TODO IMPLEMENT IN RESOURCES

          Doodle.getCollection().then(function(data){
            deferred.resolve(data);
          });

        }

        return deferred.promise;

      },
      getDoodle:function(id) {

        // var items = LocalStorage.get(LS.doodlesKey);
        var items;
        var item = false;

        if(items) {
          items.forEach(function(obj, index){
            if(obj.id.toString() === id) {
              item = obj;
              return true;
            }
          });
        }

        var deferred = $q.defer();

        var promise;

        if(item) {
          console.log(item);

          promise = Doodle.getSingle({'url' : item.ref.href});
        }
        else {
          var obj = {'instanceName' : 'doodles', 'id' : id};
          promise = Doodle.getSingle('doodles', obj);
        }
        promise.success(function(data){

          // var localStorageKey = LS.doodlesKey +"." +data.id
          // LocalStorage.set(localStorageKey, data);

          deferred.resolve(data);

        }).catch(function(){

          deferred.reject("Something went wrong with the call");
        });

        return deferred.promise;
      },
      getDoodlesForUser:function(user) {

        var items;

        var deferred = $q.defer();

        if(!items) {
          
          // Doodle.getCollectionFromUser('users/username/' + $cookieStore.get('loggedInUsername') + '/doodles').then(function(data){
          Doodle.getCollectionFromUser('user/' + $cookieStore.get('loggedInId') + '/doodles').then(function(data){

            deferred.resolve(data);
          });
        }
        else {
          console.log("Getting all the doodles from the cache");
          deferred.resolve(items);
        }

        return deferred.promise;
      },
      saveDoodle:function(doodle) {
        
        var data = {};

        data['doodle_text'] = doodle.text;
        data['lat'] = doodle.lat;
        data['long'] = doodle.long;
        data['tag_name'] = doodle.tag_name;

        var jsonData = JSON.stringify(data);
    
        var promise = Doodle.postDoodle('doodles', jsonData).then(function(data) {
          console.log(data);
        });
        return promise;
        
      },
      deleteDoodle:function(doodleId) {

        var deferred = $q.defer();

        var promise = Doodle.deleteDoodle('doodles/' + doodleId).then(function(data) {
          console.log(data);
          deferred.resolve(data);
        });

        return deferred.promise;
      },
      updateDoodle:function(doodle) {

        var deferred = $q.defer();

        var promise = Doodle.putDoodle('doodles/' + doodle.id, doodle).then(function(data) {
          console.log(data);
          deferred.resolve(data);
        });

        return deferred.promise;
      }
    };
  }
})();