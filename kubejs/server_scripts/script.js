// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here

	event.remove({ output: 'glass_armor:glass_ingot' })
	event.remove({ id: 'create:crushing/raw_zinc' })
	event.remove({ id: 'create:crushing/raw_gold' })
	event.remove({ id: 'create:crushing/raw_copper' })
	event.remove({ id: 'create:crushing/raw_iron' })

	event.recipes.create.compacting('minecraft:netherrack', ['create:cinder_flour', 'minecraft:flint', Fluid.of('minecraft:lava', 2100)])

	event.recipes.create.milling('2x farmersdelight:minced_beef', 'minecraft:beef')

	event.recipes.create.crushing(['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'create:raw_zinc')
	event.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_gold')
	event.recipes.create.crushing(['create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_copper')
	event.recipes.create.crushing(['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_iron')

	event.recipes.create.sequenced_assembly([ // start the recipe
		Item.of('glass_armor:glass_ingot'), // this is the item that will appear in JEI as the result
	],'glass',[ 
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.create.deploying('kubejs:glass_shard',['kubejs:glass_shard','glass_pane']),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.create.filling('kubejs:glass_shard',['kubejs:glass_shard',Fluid.of('lava', 27000)]),
		event.recipes.create.pressing('kubejs:glass_shard','kubejs:glass_shard')
	]).transitionalItem('kubejs:glass_shard').loops(3)
})

ServerEvents.tags('item', event => {
	// add the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.add('forge:cobblestone', 'minecraft:diamond_ore')

	// add the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.add('forge:cobblestone').remove('minecraft:mossy_cobblestone')


})