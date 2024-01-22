ServerEvents.recipes(event => {
	event.remove({output: "ad_astra:hammer", type: "minecraft:crafting_shaped"})
	event.remove({output: "ad_astra:compressor", type: "minecraft:crafting_shaped"})

	event.remove({output: "ad_astra:iron_plate", type: "ad_astra:hammering"})
	event.remove({output: "ad_astra:steel_plate", type: "ad_astra:hammering"})
	event.remove({output: "ad_astra:desh_plate", type: "ad_astra:hammering"})
	event.remove({output: "ad_astra:ostrum_plate", type: "ad_astra:hammering"})
	event.remove({output: "ad_astra:calorite_plate", type: "ad_astra:hammering"})

	event.remove({output: "ad_astra:iron_plate", type: "ad_astra:compressing"})
	event.remove({output: "ad_astra:steel_plate", type: "ad_astra:compressing"})
	event.remove({output: "ad_astra:desh_plate", type: "ad_astra:compressing"})
	event.remove({output: "ad_astra:ostrum_plate", type: "ad_astra:compressing"})
	event.remove({output: "ad_astra:calorite_plate", type: "ad_astra:compressing"})

	event.remove({output: "create_new_age:basic_motor", type: "minecraft:crafting_shaped"})
	event.remove({output: "create_new_age:advanced_motor", type: "minecraft:crafting_shaped"})
	event.remove({output: "create_new_age:reinforced_motor", type: "create:mechanical_crafting"})

	event.custom({
		type: "create_new_age:energising",
		energy_needed: 10000,
		ingredients: [
		  {
			item: "ad_astra:ostrum_ingot"
		  }
		],
		results: [
		  {
			item: 'kubejs:overcharged_ostrum'
		  }
		]
	})

	event.custom({
		type: "create:pressing",

		ingredients: [
			{
			  item: "kubejs:overcharged_ostrum"
			}
		  ],
		  results: [
			{
			  item: 'kubejs:overcharged_ostrum_plate'
			}
		  ]
	})

	event.custom({
		type: "create:pressing",

		ingredients: [
			{
			  item: "minecraft:iron_ingot"
			}
		  ],
		  results: [
			{
			  item: "ad_astra:iron_plate"
			}
		  ]
	})

	event.custom({
		"type": "create:item_application",
		"ingredients": [
		  {
			"tag": "c:stripped_wood"
		  },
		  {
			"item": "ad_astra:desh_ingot"
		  }
		],
		"results": [
		  {
			"item": "kubejs:desh_casing"
		  }
		]
	})

	event.custom({
		"type": "create:item_application",
		"ingredients": [
		  {
			"tag": "c:stripped_logs"
		  },
		  {
			"item": "ad_astra:desh_ingot"
		  }
		],
		"results": [
		  {
			"item": "kubejs:desh_casing"
		  }
		]
	})

	event.custom({
		type: "create:mechanical_crafting",
		
		pattern: [
			'COPPC',
			'ODRSS',
			'COPPC',
		],

		key: {
			C: { item: "ad_astra:calorite_ingot" },
			O: { item: "kubejs:overcharged_ostrum" },
			P: { item: "ad_astra:ostrum_plate" },
			D: { item: "kubejs:desh_casing" },
			R: { item: "minecraft:redstone_block" },
			S: { item: "create:shaft" },
		},

		result: { item: "create_new_age:reinforced_motor", count: 2}
	})

	event.shaped("create_new_age:basic_motor", [
		'AAA',
		'BCD',
		'AAA'
	], {
		A: 'ad_astra:desh_nugget',
		B: 'create_new_age:magnetite_block',
		C: 'kubejs:desh_casing',
		D: 'create:shaft'
	})

	event.shaped("create_new_age:advanced_motor", [
		'AAA',
		'BCD',
		'AAA'
	], {
		A: 'ad_astra:ostrum_nugget',
		B: 'create_new_age:overcharged_ostrum',
		C: 'kubejs:desh_casing',
		D: 'create:shaft'
	})
})