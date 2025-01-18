import rift1eItemSHeet from "./module/sheets/rift1eItemSheet";

Hooks.once("init", function(){
    console.log("rift1e | Initialising Rift system");
    Items.unregisterSheet("core",ItemSheet);
    Items.registerSheet("rift1e",rift1eItemSHeet,{ makeDefault: true});
});