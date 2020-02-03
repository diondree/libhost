'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-816f6b87.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["smtt-accordion-item.cjs",[[1,"smtt-accordion-item",{"accordionTitle":[1,"accordion-title"],"expanded":[4],"alignment":[1],"actionBarContent":[1,"action-bar-content"],"open":[32],"height":[32]}]]],["smtt-wizard.cjs",[[1,"smtt-wizard",{"name":[1],"subHeading":[1,"sub-heading"],"step":[32],"inProgress":[32],"steps":[32]}]]],["smtt-rollover-menu.cjs",[[1,"smtt-rollover-menu",{"disabled":[4],"isExpanded":[513,"is-expanded"],"closeAllOtherMenus":[64],"toggleExpansion":[64]},[[0,"keydown","addKeyListenerToMenu"]]]]],["smtt-accordion.cjs",[[1,"smtt-accordion"]]],["smtt-contextual-box.cjs",[[1,"smtt-contextual-box",{"mode":[1]}]]],["smtt-dropdown-group.cjs",[[1,"smtt-dropdown-group",{"name":[1]}]]],["smtt-dropdown-item.cjs",[[1,"smtt-dropdown-item",{"href":[1],"target":[1]}]]],["smtt-tree.cjs",[[0,"smtt-tree",{"treeHeight":[2,"tree-height"],"rowHeight":[2,"row-height"],"columns":[16],"rows":[16],"expanded":[4],"rowSelection":[1,"row-selection"],"childrenField":[1,"children-field"],"groupField":[1,"group-field"],"paginate":[4]}]]],["smtt-wizard-step.cjs",[[1,"smtt-wizard-step",{"name":[513],"subHeading":[1,"sub-heading"],"active":[4]}]]],["check-box_8.cjs",[[1,"smtt-header",{"leftMenuTitle":[1,"left-menu-title"],"userMenuTitle":[1,"user-menu-title"],"headerMessage":[1,"header-message"],"breadcrumb":[1],"imageUrl":[1,"image-url"]}],[1,"check-box",{"label":[1],"labelPosition":[1,"label-position"],"checked":[1],"disableCheckbox":[4,"disable-checkbox"],"clickAction":[16]}],[1,"smtt-input",{"name":[1],"label":[1],"formId":[1,"form-id"],"placeholder":[1],"errorMsg":[1,"error-msg"],"required":[4],"readonly":[4],"helpText":[1,"help-text"],"fullWidth":[4,"full-width"],"type":[1],"disabled":[4],"patternName":[1,"pattern-name"],"form":[1],"customValidator":[16],"errorMap":[16],"validity":[16],"checkValidity":[16],"value":[16],"isValid":[32],"passwordVisible":[32],"touched":[32],"patternRegex":[32],"patternMap":[32]},[[0,"blur","updateValidity"]]],[1,"smtt-footer",{"hash":[1]}],[1,"smtt-status-label",{"variation":[1],"subtle":[4]}],[1,"smtt-dropdown",{"name":[1],"subHeading":[1,"sub-heading"],"fullWidth":[4,"full-width"],"size":[2],"open":[32]},[[4,"click","handleClick"]]],[1,"smtt-button",{"disabled":[4],"type":[1],"size":[1],"theme":[1],"variation":[1],"icon":[1],"iconStyle":[16],"fullHeight":[4,"full-height"],"fullWidth":[4,"full-width"],"iconRight":[4,"icon-right"],"alignment":[1]}],[1,"smtt-icon",{"icon":[1],"color":[1],"type":[1],"theme":[1],"disabled":[4],"width":[1],"label":[1],"svgContent":[32],"addBtnClass":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
