angular.module('eklabs.angularStarterPack').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('eklabs.angularStarterPack/modules/forms/directives/my-form/myFormView.html',
    "<form name=\"myForm\" ng-submit=\"actions.onValid(myUser)\">\n" +
    "\n" +
    "    <div layout=\"column\" >\n" +
    "        <md-input-container >\n" +
    "            <label>FirstName</label>\n" +
    "            <input name=\"name\" ng-model=\"myUser.firstname\" />\n" +
    "        </md-input-container>\n" +
    "\n" +
    "        <md-input-container >\n" +
    "            <label>LastName</label>\n" +
    "            <input name=\"name\" ng-model=\"myUser.lastname\" />\n" +
    "        </md-input-container>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <md-button type=\"submit\">\n" +
    "        <md-icon md-svg-src=\"material-design:done\"></md-icon>\n" +
    "        Valider\n" +
    "    </md-button>\n" +
    "\n" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/json-editor/directives/editor/view.html',
    "<form id        =   \"myJsonEditor\"\n" +
    "      name      =   \"myForm\"\n" +
    "      novalidate\n" +
    "      layout    =   \"column\"\n" +
    "      ng-submit =   \"myForm.$valid && !editorError && !eerror.length && actions.valid(currentJson)\"\n" +
    "      ng-style  =   \"{'min-height' : currentHeight, 'max-height' : currentHeight}\"\n" +
    "      style=\"overflow-y: hidden;overflow-x: hidden\">\n" +
    "\n" +
    "    <!-- FORM CONTENT -->\n" +
    "    <div flex\n" +
    "         layout     =   \"column\"\n" +
    "         style      =   \"overflow-y:auto;overflow-x: hidden;\"\n" +
    "         ng-style   =   \"{'min-height' : maxHeightContainer , 'max-height' : maxHeightContainer}\">\n" +
    "\n" +
    "        <div layout=\"column\" flex ng-if=\"aceAvailable\">\n" +
    "\n" +
    "            <h2 class=\"title\">Editeur JSON </h2>\n" +
    "\n" +
    "            <div ui-ace=\"aceOption\" ng-model=\"aceModel\" style=\"width: 100%\" ng-style = \"{'max-height' : aceMaxHeight }\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- BOUTON ACTIONS -->\n" +
    "    <div layout=\"row\" layout-align=\"start center\" class=\"shadow_up\" >\n" +
    "\n" +
    "        <div ng-if=\"errors.length || editorError\" layout=\"row\" class=\"warn-font\" style=\"font-size: 0.9em\">\n" +
    "\n" +
    "            <md-icon md-svg-src=\"material-design:error_outline\" class=\"ic_16px warn-font\"></md-icon>\n" +
    "\n" +
    "            <span ng-if=\"errors.length\" ng-repeat=\"error in errors\">{{error}}</span>\n" +
    "\n" +
    "            <span ng-if=\"editorError\" style=\"margin-left: 10px;\">{{editorError}}</span>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div flex></div>\n" +
    "\n" +
    "        <md-button type=\"submit\" aria-label=\"test\" ng-disabled=\"editorError || errors.length\">\n" +
    "            <md-icon md-svg-src=\"material-design:done\"></md-icon>\n" +
    "            <span style=\"font-weight:200\">Valider</span>\n" +
    "        </md-button>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/user/directives/my-user/view.html',
    "<div ng-if=\"!user\">\n" +
    "    User manquant ....\n" +
    "</div>\n" +
    "\n" +
    "<md-card layout=\"column\" ng-if=\"user && !isModeEdition\">\n" +
    "\n" +
    "    <div layout=\"row\">\n" +
    "        <div flex=\"20\">\n" +
    "            <img ng-src=\"{{user.photo}}\" ng-if=\"user.photo\" style=\"width: 100px; height: 100px;border-radius:30px\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <div flex layout=\"column\">\n" +
    "            <span>{{user.name}}</span>\n" +
    "            <span>{{user.birthDate | momentFormat: 'DD MMM YYYY'}}</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div layout=\"row\" layout-align=\"end end\">\n" +
    "        <md-button ng-if=\"isEditable\" ng-click=\"goToEdition()\">\n" +
    "            <md-icon md-svg-src=\"material-design:edit\"></md-icon>\n" +
    "            Editer\n" +
    "        </md-button>\n" +
    "    </div>\n" +
    "</md-card>\n" +
    "\n" +
    "<md-card ng-if=\"user && isModeEdition\">\n" +
    "\n" +
    "    <div layout=\"row\">\n" +
    "\n" +
    "        <div flex=\"20\">\n" +
    "            <img ng-src=\"{{user.photo}}\" ng-if=\"user.photo\" style=\"width: 100px; height: 100px;border-radius:30px\"/>\n" +
    "        </div>\n" +
    "\n" +
    "        <div flex layout=\"column\">\n" +
    "\n" +
    "            <md-input-container class=\"md-block\">\n" +
    "                <label>Nom</label>\n" +
    "                <input required name=\"nom\" ng-model=\"userEdit.name\" />\n" +
    "            </md-input-container>\n" +
    "\n" +
    "            <md-datepicker ng-model=\"userEdit.birthDate\" md-placeholder=\"Enter date\"></md-datepicker>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div layout=\"row\" layout-align=\"end end\">\n" +
    "        <md-button ng-click=\"goToEdition()\">\n" +
    "            <md-icon md-svg-src=\"material-design:remove\"></md-icon>\n" +
    "            Annuler\n" +
    "        </md-button>\n" +
    "        <md-button ng-click=\"valid(userEdit)\">\n" +
    "            <md-icon md-svg-src=\"material-design:done\"></md-icon>\n" +
    "            Valider\n" +
    "        </md-button>\n" +
    "    </div>\n" +
    "</md-card>\n" +
    "\n"
  );

}]);
