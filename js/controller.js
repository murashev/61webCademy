let controller = (function (budgetCtrl, uiCtrl) {

   let setupEventListeners = function () {
      let DOM = uiCtrl.getDomStrings();
      document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
   }

   // Функция срабатывающая при отправке формы
   function ctrlAddItem(event) {
      event.preventDefault();
      console.log("Fired!");

      // 1. Получить данные из формы
      let input = uiCtrl.getInput();
      console.log(input);

      // 2. Добавить полученные данные в модель
      let newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      budgetCtrl.test();

      // 3. Добавить "запись" в UI
      uiCtrl.renderListItem(newItem, input.type);
      uiCtrl.clearFields();
      // generateTestData.init();

      // 4. Посчитать бюджет

      // 5. Отобразить бюджет в UI

   }

   return {
      init: function () {
         console.log("App started!");
         setupEventListeners();
      }
   }


})(modelController, viewController);

controller.init();