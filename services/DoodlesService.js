(function() {

angular
  .module('positioning_service_client_app')
  .factory('DoodlesService', DoodlesService);

  DoodlesService.$inject = ['ResourceService', 'localStorageService', 'LocalStorageConstants', '$q'];

  function DoodlesService(Resource, LocalStorage, LS, $q) {
        
    var Doodle = Resource('doodles');

    return {
      getAll:function() {

        var items = LocalStorage.get(LS.doodlesKey);

        var deferred = $q.defer();

        if(!items) {
          
          Doodle.getCollection().then(function(data){

            LocalStorage.set(LS.doodlesKey, data);

            deferred.resolve(data);
          });
        }
        else {
          console.log("Getting all the doodles from the cache");
          deferred.resolve(items);
        }

        return deferred.promise;
      },
      
      getDoodle:function(id) {

        var items = LocalStorage.get(LS.doodlesKey);
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

          var localStorageKey = LS.doodlesKey +"." +data.id
          LocalStorage.set(localStorageKey, data);

          deferred.resolve(data);

        }).catch(function(){

          deferred.reject("Something went wrong with the call");
        });

        return deferred.promise;
      },
      savePlayer:function(data) {
        
        data = { "doodle":
                  {
                      "description": "hepp hepp"
                  }
              }
        var promise = Doodle.save('doodles', data).then(function(data) {
          console.log(data);
        });
        return promise;
      }
    
    };
  }
})();