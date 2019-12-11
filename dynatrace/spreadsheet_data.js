var ticker = 'DT';
var sound = 'For the love of money.m4a';

var MoM_slider = {
	'min': 4,
	'max': 11,
	'increment': .5
};

var options_build = [
	{
		'tranche': 1,
		'strike': 0,
		'shares': 1.246568
	},
	{
		'tranche': 2,
		'strike': 16,
		'shares': 7.223
	},
	{
		'tranche': 3,
		'strike': 0,
		'shares': 2.338
	}
];

var basic_shares_build = {
	'Common':0,
	'RSAs': 0
};

var share_count_build = {
	'Basic Shares': 280.539648,
	'IPO Shares': 0,
	'Greenshoe Shares': 0
};

var revenues = {
	'2019': 506,
	'2020': 626
};
var ebitdas = {
	'2019': 124,
	'2020': 154
};
var uFCF = {
	'2019': 166,
	'2020': 193
};
var net_debt = 581.1-211.696;

var TB_preIPO_shares = 194.425163;
var transactions = [
	{
		'event':'Purchase',
		'date': '8/22/13',
		'amount': -135,
		'shares': TB_preIPO_shares
	},
	{
		'event':'Transaction Fees',
		'date': '8/22/13',
		'amount': 4
	},
	{
		'event':'Transaction Fees',
		'date': '11/22/13',
		'amount': 0.5
	},
	{
		'event':'Transaction Fees',
		'date': '2/21/14',
		'amount': 0.25
	},
	{
		'event':'Transaction Fees',
		'date': '5/29/14',
		'amount': 0.25
	},
	{
		'event':'Transaction Fees',
		'date': '7/14/14',
		'amount': 0.25
	},
	{
		'event':'Transaction Fees',
		'date': '11/26/14',
		'amount': 0.25
	},
	{
		'event':'Purchase',
		'date': '12/15/14',
		'amount': -562,
		'shares': 0
	},
	{
		'event':'Transaction Fees',
		'date': '12/15/14',
		'amount': 22
	},
	{
		'event':'Transaction Fees',
		'date': '1/15/15',
		'amount': 2.08
	},
	{
		'event':'Transaction Fees',
		'date': '3/31/15',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '7/7/15',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '10/7/15',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '12/31/15',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '6/17/16',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '6/28/16',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '10/27/16',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '1/4/17',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '3/28/17',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '6/29/17',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '9/29/17',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '12/29/17',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '3/27/18',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '6/27/18',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '9/27/18',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '12/27/18',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '3/27/19',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '6/27/19',
		'amount': 1.77 
	},
	{
		'event':'First Follow-On',
		'date': '12/5/19',
		'amount': 561.655961773205,
		'shares': -23.3588988
	}
];