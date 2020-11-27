(function () {
    'use strict';
   
    angular.module('ControllerAsApp', [])
   
    .controller('Topicslist2', Topicslist2)
    .factory('TopicsListFactory', TopicsListFactory);
   
    Topicslist2.$inject = ['TopicsListFactory'];
    function Topicslist2(TopicsListFactory) {
      var list2 = this;
   
      var TopicsList = TopicsListFactory(5);
   
      list2.items = TopicsList.getItems();
   
     
      list2.Topicsname= "";
   
      list2.addItem = function () {
        try {
          TopicsList.addItem(list2.Topicsname);
        } catch (error) {
          list2.errorMessage = error.message;
        }
   
      }
   
      list2.removeItem = function (itemIndex) {
        TopicsList.removeItem(itemIndex);
      };
    }
   
   
    function TopicsListService(maxItems) {
      var service = this;
   
 
      var items = [];
   
      service.addItem = function (Topicsname) {
        if ((maxItems === undefined) ||
            (maxItems !== undefined) && (items.length < maxItems)) {
          var item = {
           
            Topicsname: Topicsname
          };
          items.push(item);
        }
        else {
          throw new Error("Max items (" + maxItems + ") reached.");
        }
      };
   
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
   
      service.getItems = function () {
        return items;
      };
    }
   
   
    function TopicsListFactory() {
      var factory = function (maxItems) {
        return new TopicsListService(maxItems);
      };
   
      return factory;
    }
   
    })();