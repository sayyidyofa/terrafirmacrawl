const baseTheme = {
    "type": "theme",
    "id": 0,
    "theme": {
        "normal": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:cobblestone",
                    "weight": 3
                },
                {
                    "block": "minecraft:stone_bricks",
                    "weight": 2
                },
                {
                    "block": "minecraft:cracked_stone_bricks"
                }
            ]
        },
        "normal_2": {
            "type": "block",
            "block": "minecraft:obsidian"
        },
        "solid": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:stone_bricks",
                    "weight": 4
                },
                {
                    "block": "minecraft:cracked_stone_bricks",
                    "weight": 2
                }
            ]
        },
        "floor": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:stone_bricks",
                    "weight": 2
                },
                {
                    "block": "minecraft:cracked_stone_bricks"
                }
            ]
        },
        "stairs": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:cobblestone_stairs",
                    "weight": 4
                },
                {
                    "block": "minecraft:stone_brick_stairs",
                    "weight": 4
                }
            ]
        },
        "solid_stairs": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:stone_brick_stairs",
                    "weight": 3
                },
                {
                    "block": "minecraft:cobblestone_stairs"
                }
            ]
        },
        "material": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:cobblestone",
                    "weight": 3
                },
                {
                    "block": "minecraft:stone_bricks",
                    "weight": 3
                },
                {
                    "block": "minecraft:gravel",
                    "weight": 2
                }
            ]
        },
        "slab": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:cobblestone_slab",
                    "weight": 2
                },
                {
                    "block": "minecraft:stone_brick_slab"
                }
            ]
        },
        "solid_slab": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:cobblestone_slab"
                },
                {
                    "block": "minecraft:stone_brick_slab"
                }
            ]
        },
        "wall": {
            "type": "random_block",
            "blocks": [
                {
                    "block": "minecraft:cobblestone_wall"
                },
                {
                    "block": "minecraft:stone_brick_wall"
                }
            ]
        }
    }
}

const allRockTags = [
    "tfc:rock/bricks/granite",
    "tfc:rock/mossy_bricks/granite",
    "tfc:rock/cracked_bricks/granite",
    "tfc:rock/chiseled/granite",
    "tfc:rock/bricks/diorite",
    "tfc:rock/mossy_bricks/diorite",
    "tfc:rock/cracked_bricks/diorite",
    "tfc:rock/chiseled/diorite",
    "tfc:rock/bricks/gabbro",
    "tfc:rock/mossy_bricks/gabbro",
    "tfc:rock/cracked_bricks/gabbro",
    "tfc:rock/chiseled/gabbro",
    "tfc:rock/bricks/shale",
    "tfc:rock/mossy_bricks/shale",
    "tfc:rock/cracked_bricks/shale",
    "tfc:rock/chiseled/shale",
    "tfc:rock/bricks/claystone",
    "tfc:rock/mossy_bricks/claystone",
    "tfc:rock/cracked_bricks/claystone",
    "tfc:rock/chiseled/claystone",
    "tfc:rock/bricks/limestone",
    "tfc:rock/mossy_bricks/limestone",
    "tfc:rock/cracked_bricks/limestone",
    "tfc:rock/chiseled/limestone",
    "tfc:rock/bricks/conglomerate",
    "tfc:rock/mossy_bricks/conglomerate",
    "tfc:rock/cracked_bricks/conglomerate",
    "tfc:rock/chiseled/conglomerate",
    "tfc:rock/bricks/dolomite",
    "tfc:rock/mossy_bricks/dolomite",
    "tfc:rock/cracked_bricks/dolomite",
    "tfc:rock/chiseled/dolomite",
    "tfc:rock/bricks/chert",
    "tfc:rock/mossy_bricks/chert",
    "tfc:rock/cracked_bricks/chert",
    "tfc:rock/chiseled/chert",
    "tfc:rock/bricks/chalk",
    "tfc:rock/mossy_bricks/chalk",
    "tfc:rock/cracked_bricks/chalk",
    "tfc:rock/chiseled/chalk",
    "tfc:rock/bricks/rhyolite",
    "tfc:rock/mossy_bricks/rhyolite",
    "tfc:rock/cracked_bricks/rhyolite",
    "tfc:rock/chiseled/rhyolite",
    "tfc:rock/bricks/basalt",
    "tfc:rock/mossy_bricks/basalt",
    "tfc:rock/cracked_bricks/basalt",
    "tfc:rock/chiseled/basalt",
    "tfc:rock/bricks/andesite",
    "tfc:rock/mossy_bricks/andesite",
    "tfc:rock/cracked_bricks/andesite",
    "tfc:rock/chiseled/andesite",
    "tfc:rock/bricks/dacite",
    "tfc:rock/mossy_bricks/dacite",
    "tfc:rock/cracked_bricks/dacite",
    "tfc:rock/chiseled/dacite",
    "tfc:rock/bricks/quartzite",
    "tfc:rock/mossy_bricks/quartzite",
    "tfc:rock/cracked_bricks/quartzite",
    "tfc:rock/chiseled/quartzite",
    "tfc:rock/bricks/slate",
    "tfc:rock/mossy_bricks/slate",
    "tfc:rock/cracked_bricks/slate",
    "tfc:rock/chiseled/slate",
    "tfc:rock/bricks/phyllite",
    "tfc:rock/mossy_bricks/phyllite",
    "tfc:rock/cracked_bricks/phyllite",
    "tfc:rock/chiseled/phyllite",
    "tfc:rock/bricks/schist",
    "tfc:rock/mossy_bricks/schist",
    "tfc:rock/cracked_bricks/schist",
    "tfc:rock/chiseled/schist",
    "tfc:rock/bricks/gneiss",
    "tfc:rock/mossy_bricks/gneiss",
    "tfc:rock/cracked_bricks/gneiss",
    "tfc:rock/chiseled/gneiss",
    "tfc:rock/bricks/marble",
    "tfc:rock/mossy_bricks/marble",
    "tfc:rock/cracked_bricks/marble",
    "tfc:rock/chiseled/marble"
]

const rocks = [
    'granite',
    'diorite',
    'gabbro',
    'shale',
    'claystone',
    'limestone',
    'conglomerate',
    'dolomite',
    'chert',
    'chalk',
    'rhyolite',
    'basalt',
    'andesite',
    'dacite',
    'quartzite',
    'slate',
    'phyllite',
    'schist',
    'gneiss',
    'marble'
]

const tagSeparator = "/"

const rockTagPrefix = "tfc:rock"

const brickStates = [
    "bricks",
    "mossy_bricks",
    "cracked_bricks",
    //"chiseled"
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const weighedBricks = (rock, suffix = "") => {
    return brickStates.map(state => {
        return {
            block: `${rockTagPrefix}${tagSeparator}${state}${tagSeparator}${rock}${suffix}`,
            weight: getRandomInt(2, 5)
        }
    })
}

function generateTemplateSingleRock(rock, id = 0) {
    return {
        type: "theme",
        id: id,
        theme: {
            normal: {
                type: "random_block",
                blocks: weighedBricks(rock)
            },
            normal2: {
                type: "block",
                block: "minecraft:obsidian"
            },
            solid: {
                type: "random_block",
                blocks: weighedBricks(rock)
            },
            floor: {
                type: "random_block",
                blocks: weighedBricks(rock)
            },
            stairs: {
                type: "random_block",
                blocks: weighedBricks(rock, "_stairs")
            },
            solid_stairs: {
                type: "random_block",
                blocks: weighedBricks(rock, "_stairs")
            },
            material: {
                type: "random_block",
                blocks: weighedBricks(rock)
            },
            slab: {
                type: "random_block",
                blocks: weighedBricks(rock, "_slab")
            },
            solid_slab: {
                type: "random_block",
                blocks: weighedBricks(rock, "_slab")
            },
            wall: {
                type: "random_block",
                blocks: weighedBricks(rock, "_wall")
            }
        }
    }
}