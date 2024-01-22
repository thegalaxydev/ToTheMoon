Platform.mods.kubejs.name = 'To The Moon'

StartupEvents.registry('item', event => {
    event.create('overcharged_ostrum').texture('tothemoon:item/overcharged_ostrum').displayName("Overcharged Ostrum").maxStackSize(64)
    event.create('overcharged_ostrum_plate').texture('tothemoon:item/overcharged_ostrum_plate').displayName("Overcharged Ostrum Plate").maxStackSize(64)
})