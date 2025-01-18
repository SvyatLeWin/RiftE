export default class rift1eItemSHeet extends ItemSheet{
    get template(){
        return `systems/rift1e/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}