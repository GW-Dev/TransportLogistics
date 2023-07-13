// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
	event.recipes.create.compacting('minecraft:netherrack', ['create:cinder_flour', 'minecraft:flint', Fluid.of('minecraft:lava', 2100)])
})

ServerEvents.tags('item', event => {
	// add the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.add('forge:cobblestone', 'minecraft:diamond_ore')

	// add the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.add('forge:cobblestone').remove('minecraft:mossy_cobblestone')


})