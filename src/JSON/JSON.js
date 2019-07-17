const genderArray = [
	{
		key: 0,
		text: 'Unisex',
		value: 'Unisex',
	},
	{
		key: 1,
		text: 'Women',
		value: 'Women',
	},
	{
		key: 2,
		text: 'Men',
		value: 'Men',
	},
	{
		key: 3,
		text: 'Girls',
		value: 'Girls',
	},
	{
		key: 4,
		text: 'Boys',
		value: 'Boys',
	},
	{
		key: 5,
		text: 'Aliens',
		value: 'Aliens',
	},
];

const associationArray = [
	{
		key: 0,
		text: 'searching',
		value: 'searching',
	},{
		key: 1,
		text: 'interested in',
		value: 'interested in',
	},{
		key: 2,
		text: 'purchasing',
		value: 'purchasing',
	}
];

const clothingArr = [
	{
		key: 0,
		text: 'Pants',
		value: 'Pants',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys' ]
	},
	{
		key: 1,
		text: 'Jeans',
		value: 'Jeans',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys' ]
	},{
		key: 2,
		text: 'Shorts',
		value: 'Shorts',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys' ]
	},{
		key: 4,
		text: 'Polo Shirts',
		value: 'Polo Shirts',
		demographic: [ 'Men', 'Boys' ]
	},{
		key: 5,
		text: 'Tee Shirts',
		value: 'Tee Shirts',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys' ]
	},{
		key: 6,
		text: 'Socks',
		value: 'Socks',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys' ]
	},{
		key: 7,
		text: 'Shoes',
		value: 'Shoes',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys' ]
	},{
		key: 8,
		text: 'Bathing Suits',
		value: 'Bathing Suits',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys' ]
	},{
		key: 9,
		text: 'Skirts',
		value: 'Skirts',
		demographic: [ 'Women', 'Girls' ]
	},{
		key: 10,
		text: 'Dresses',
		value: 'Dresses',
		demographic: [ 'Women', 'Girls' ]
	},{
		key: 11,
		text: 'Bras',
		value: 'Bras',
		demographic: [ 'Women' ]
	},{
		key: 12,
		text: 'Pantyhose',
		value: 'Pantyhose',
		demographic: [ 'Women', 'Girls' ]
	},{
		key: 13,
		text: 'Lingerie',
		value: 'Lingerie',
		demographic: [ 'Women' ]
	},{
		key: 14,
		text: 'Lazer Guns',
		value: 'Lazer Guns',
		demographic: [ 'Aliens' ]
	},{
		key: 15,
		text: 'Spandex Suits',
		value: 'Spandex Suits',
		demographic: [ 'Aliens' ]
	},{
		key: 16,
		text: 'Oversized Helmets',
		value: 'Oversized Helmets',
		demographic: [ 'Aliens' ]
	},{
		key: 17,
		text: 'Antenna Warmers',
		value: 'Antenna Warmers',
		demographic: [ 'Aliens' ]
	},{
		key: 18,
		text: 'Two Finger Gloves',
		value: 'Two Finger Gloves',
		demographic: [ 'Aliens' ]
	}
];

const searchedAndPurchased = [
	{
		key: 1,
		text: 'Searched',
		value: 'Searched',
	},{
		key: 2,
		text: 'Purchased',
		value: 'Purchased',
	}
];

const onAroundAndBefore = [
	{
		key: 1,
		text: 'On',
		value: 'On',
	},{
		key: 2,
		text: 'Around',
		value: 'Around',
	},{
		key: 3,
		text: 'Before',
		value: 'Before',
	}
];

const devices = [
	{
		key: 1,
		text: 'Web',
		value: 'Web',
		os: ['Mac', 'Windows', 'Other']
	},
	{
		key: 2,
		text: 'Mobile',
		value: 'Mobile',
		os: ['iOS', 'Android', 'Other']
	}
];

const operatingSystems = [
	{
		key: 1,
		text: 'MacOS',
		value: 'MacOS',
		devices: [ 'Web' ]
	},{
		key: 2,
		text: 'iOS',
		value: 'iOS',
		devices: [ 'Mobile' ]
	},{
		key: 3,
		text: 'Windows',
		value: 'Windows',
		devices: [ 'Web' ]
	},{
		key: 4,
		text: 'Android',
		value: 'Android',
		devices: ['Mobile'],
	},{
		key: 5,
		text: 'Other',
		value: 'Other',
		devices: [ 'Web', 'Mobile' ],
	}
];

const deviceModifiers = [
	{
		key: 1,
		text: 'Uses',
		value: 'Uses',
	}
];

const userConditions = [
	{
		key: 1,
		value: 'All Users',
		text: 'All Users'

	},{
		key: 2,
		value: 'High frequency users',
		text: 'High frequency users'

	}, {
		key: 3,
		value: 'Low frequency users',
		text: 'Low frequency users',

	},{
		key: 4,
		value: 'Non-users',
		text: 'Non-users',
	}
];

export default { genderArray, associationArray, operatingSystems, deviceModifiers, devices, onAroundAndBefore, clothingArr, searchedAndPurchased, userConditions };