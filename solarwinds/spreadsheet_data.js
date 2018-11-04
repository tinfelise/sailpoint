var ticker = 'SWI';
// var sound = 'sail.mp3';

var options_build = [
	{
		'tranche': 1,
		'strike': 0,
		'shares': 7.797767,
	},
	{
		'tranche': 2,
		'strike': 1.66,
		'shares': 3.702233,
	}
];

var share_count_build = {
	'Basic Shares': 302.144446725891,
	'Pref-Shares': 0,
	'IPO Shares': 0,
	'Greenshoe Shares': 0
};

var ebitdas = {
	'2018': 398.3,
	'2019': 445.4
};
var uFCF = {
	'2019': 400
};
var net_debt = 1669.8125;

var TB_preIPO_shares = 112.129322730121;
var transactions = [
	{
		'event':'Purchase',
		'date': '2/5/16',
		'amount': -1010,
		'shares': TB_preIPO_shares
	},
	{
		'event':'LNOW Purchase',
		'date': '5/31/16',
		'amount': -78.4640319999999
	},
	{
		'event':'Transaction Fees',
		'date': '3/31/16',
		'amount': 0.8
	},
	{
		'event':'Transaction Fees',
		'date': '6/30/16',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '9/30/16',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '12/31/16',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '3/31/17',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '6/30/17',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '9/30/17',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '12/31/17',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '3/31/18',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '6/30/18',
		'amount': 1.3
	},
	{
		'event':'Transaction Fees',
		'date': '9/30/18',
		'amount': 1.3
	}
];