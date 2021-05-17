var LetterList = "BCDFGHJKMNPQRTY";

var CurrentLetterList

function PutLettersInGrid(LetterList,NRows,NCols, width=600, height=300)
	{
		var count = 0;
		var FontSize = 40;
		var Table = '';
		Table += '<table margin-left="auto" margin-right="auto" border="0" width="'+width+'">'
		for (var i=0; i<NRows; i++) { // Cycle over rows
			Table += '<tr height="'+height+'">'
			for (var j=0; j<NCols; j++) { // cycle over columns
				Table += '<td><div style="font-size:'+FontSize+'px;">'+LetterList[count]+'</td>';
				count += 1;

			}
		}
		return Table
	}

function PutIntoTable(top='top', middle='mid', bottom='bot', width=600, height=300) {
      return '<table margin-left="auto" margin-right="auto" border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:'+FontSize+'px;">'+middle+'</div></td></tr> <tr height="'+height+'"><td>'+bottom+'</td></tr></table>';
    }

//TL,TM,TR,CL,CM,CR,BL,BM,BR,probe,corr,Load
var DMSLetterList001 = [
   {
   		"StimulusLetters" = "****D****",
   		"ProbeLetter" = "z",
   		"Correct" = false,
   		"Load" = 1
   	}
]

/*
*,*,*,*,Q,*,*,*,*,v,2,1
*,*,*,*,N,*,*,*,*,c,2,1
*,*,*,*,M,*,*,*,*,m,1,1
*,*,*,*,Z,*,*,*,*,z,1,1
*,*,*,*,J,*,*,*,*,j,1,1
*,*,*,F,*,X,*,*,*,c,2,2
*,*,*,S,*,N,*,*,*,s,1,2
*,*,*,Y,*,L,*,*,*,y,1,2
*,*,*,C,*,M,*,*,*,c,1,2
*,*,*,Q,*,B,*,*,*,n,2,2
*,*,*,F,*,T,*,*,*,c,2,2
*,*,*,C,Z,H,*,*,*,y,2,3
*,*,*,X,B,K,*,*,*,x,1,3
*,*,*,R,H,Y,*,*,*,r,1,3
*,*,*,C,L,T,*,*,*,c,1,3
*,*,*,G,X,Y,*,*,*,f,2,3
*,*,*,M,N,C,*,*,*,b,2,3
Z,*,B,*,*,*,C,*,P,z,1,4
V,*,G,*,*,*,Y,*,N,y,1,4
M,*,X,*,*,*,J,*,B,h,2,4
V,*,L,*,*,*,F,*,Y,y,1,4
P,*,N,*,*,*,H,*,X,g,2,4
R,*,D,*,*,*,Z,*,T,m,2,4
V,*,Q,*,L,*,B,*,H,x,2,5
Z,*,P,*,C,*,F,*,K,p,1,5
J,*,G,*,N,*,D,*,Y,h,2,5
X,*,R,*,M,*,V,*,L,v,1,5
Q,*,G,*,Y,*,J,*,Z,t,2,5
X,*,C,*,S,*,K,*,M,x,1,5
P,C,Z,*,*,*,G,Q,J,f,2,6
K,H,X,*,*,*,R,M,V,r,1,6
J,L,Z,*,*,*,G,C,D,f,2,6
B,Q,T,*,*,*,K,P,Y,h,2,6
S,X,R,*,*,*,N,L,F,r,1,6
M,Z,J,*,*,*,V,B,D,v,1,6
J,D,F,*,K,*,Z,N,X,g,2,7
S,C,Q,*,T,*,L,M,B,s,1,7
D,Y,F,*,R,*,K,G,N,x,2,7
T,Q,J,*,L,*,H,S,M,j,1,7
R,G,N,*,B,*,D,V,C,c,1,7
F,Q,S,*,K,*,Y,L,M,x,2,7
D,N,S,Q,*,H,Z,K,F,s,1,8
B,Q,L,X,*,M,Y,V,G,g,1,8
R,Q,J,K,*,T,C,F,D,d,1,8
M,G,X,Z,*,H,S,V,L,p,2,8
K,M,F,N,*,Q,T,D,R,j,2,8
N,Y,X,H,*,G,P,C,L,z,2,8
S,R,C,Z,P,J,Q,D,F,s,1,9
Z,X,M,F,G,V,T,B,L,k,2,9
V,D,C,B,R,H,Q,J,S,y,2,9
L,K,F,S,G,N,M,P,Y,n,1,9
T,C,J,X,K,R,G,B,V,t,1,9
Q,Z,Y,S,R,K,D,L,N,f,2,9