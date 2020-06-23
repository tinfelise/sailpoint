var ticker = 'DT';
var sound = 'For the love of money.m4a';
var disclaimer = 'All return figures include Compuware sale proceeds.'

var MoM_slider = {
	'min': 10,
	'max': 17,
	'increment': .5
};

var options_build = [
	{
		'tranche': 1,
		'strike': 16.26,
		'shares': 7.147
	},
	{
		'tranche': 2,
		'strike': 0,
		'shares': 1.984
	},
	{
		'tranche': 3,
		'strike': 0,
		'shares': 3.123
	}
];

var basic_shares_build = {
	'Common':0,
	'RSAs': 0
};

var share_count_build = {
	'Basic Shares': 280.802381,
	'IPO Shares': 0,
	'Greenshoe Shares': 0
};

var revenues = {
	'2020': 150.6+149+152.4+163.5,
	'2021': 171.6+181+187.8+204.6
};
var ebitdas = {
	'2020': 38.4+42.4+38+40.9,
	'2021': 42.1+43.2+51.8+57
};
var uFCF = {
	'2020': 63.3+25.7+24.6+33.5,
	'2021': 95.4+40.2+41.6+56.7
};
var net_debt = 551.1-(515.189-485.189)-213.17;

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
		'date': '6/28/18',
		'amount': 1.77 
	},
	{
		'event':'Transaction Fees',
		'date': '10/4/18',
		'amount': 0.57 
	},
	{
		'event':'Transaction Fees',
		'date': '10/10/18',
		'amount': 1.06 
	},
	{
		'event':'Transaction Fees',
		'date': '11/27/18',
		'amount': 0.14
	},
	{
		'event':'Transaction Fees',
		'date': '1/4/19',
		'amount': 1.06 
	},
	{
		'event':'Transaction Fees',
		'date': '1/10/19',
		'amount': 0.57
	},
	{
		'event':'Transaction Fees',
		'date': '2/14/19',
		'amount': 0.14
	},
	{
		'event':'Transaction Fees',
		'date': '4/9/19',
		'amount': 1.06
	},
	{
		'event':'Transaction Fees',
		'date': '4/12/19',
		'amount': 0.57
	},
	{
		'event':'Transaction Fees',
		'date': '4/18/19',
		'amount': 0.14
	},
	{
		'event':'Transaction Fees',
		'date': '6/28/19',
		'amount': 0.35
	},
	{
		'event':'Transaction Fees',
		'date': '7/1/19',
		'amount': 0.57
	},
	{
		'event':'Realization',
		'date': '12/10/19',
		'amount': 561.66,
		'shares': -23.3588988
	},
	{
		'event':'Realization',
		'date': '12/18/19',
		'amount': 87.43,
		'shares': -3.63606692542934
	},
	{
		'event':'Realization',
		'date': '2/25/20',
		'amount': 714.64,
		'shares': -21.270072
	},
	{
		'event':'Transaction Fees',
		'date': '3/30/20',
		'amount': 0.06 
	},
	{
		'event':'Transaction Fees',
		'date': '4/16/20',
		'amount': 0.02 
	},
	{
		'event':'Realization',
		'date': '6/1/20',
		'amount': 724.67592155
	},
	{
		'event':'Realization',
		'date': '6/5/20',
		'amount': 29.668891*35*(1-(1.9/100)),
		'shares': -29.668891
	},
	{
		'event':'Realization - Future',
		'date': '10/1/20',
		'amount': 2.60901324
	}
];