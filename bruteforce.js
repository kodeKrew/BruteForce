var LOW_ALPHA= 'abcdefghijklmnopqrstuvwxyz';
var UP_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var NUMERIC = '0123456789';
var SPEC_CHAR='!#$%&,()*+-.';



function disp(x)
{
	if (x!=NaN)
	{
		console.log('String: '+x);		
	}

}
 
function pick(n, got, pos, from) 
{
	var cnt = 0;

	if (got.length == n) 
	{
		
		disp(got);
		return  ;
		// return 1;
	}
	for (var i = pos; i < from.length; i++)
	 {
		got.push(from[i]);
		//cnt += 
		pick(n, got, i, from);
		got.pop();
	}
	//return cnt;
	//return;
}

//console.log('display 1---------------------------')
//disp( pick(3, [], 0, "abc") );

var permutations = [];

function doPerm(str, arr) {
    if (typeof (str) == 'string') str = str.split('');
    if (str.length == 0) permutations.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        var x = str.splice(i, 1);
        arr.push(x);
        doPerm(str, arr);
        arr.pop();
        str.splice(i, 0, x);
    }
}
//doPerm('ABC', []);
//console.log(permutations);

function printNCharPasswords(strSet,passLen,prefix)
{
	if (passLen ==0)
	{
		console.log(prefix);
		return;
	}
	for(i=0;i<strSet.length;i++)
	{
		printNCharPasswords(strSet,passLen-1,prefix+strSet[i]);
	}
}

printNCharPasswords(LOW_ALPHA,3,'');