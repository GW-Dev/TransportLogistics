// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here

	event.remove({ id: 'create:crushing/raw_zinc' })
	event.remove({ id: 'create:crushing/raw_gold' })
	event.remove({ id: 'create:crushing/raw_copper' })
	event.remove({ id: 'create:crushing/raw_iron' })

	event.recipes.create.compacting('minecraft:netherrack', ['create:cinder_flour', 'minecraft:flint', Fluid.of('minecraft:lava', 2100)])

	event.recipes.create.crushing(['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'create:raw_zinc')
	event.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_gold')
	event.recipes.create.crushing(['create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_copper')
	event.recipes.create.crushing(['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_iron')
})

ServerEvents.tags('item', event => {
	// add the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.add('forge:cobblestone', 'minecraft:diamond_ore')

	// add the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.add('forge:cobblestone').remove('minecraft:mossy_cobblestone')


})