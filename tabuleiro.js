const W_KING   = 1;  // "&#9812" ♔
const W_QUEEN  = 2;  // "&#9813" ♕
const W_ROOK   = 3;  // "&#9814" ♖
const W_BISHOP = 4;  // "&#9815" ♗
const W_KNIGHT = 5;  // "&#9816" ♘
const W_PAWN   = 6;  // "&#9817" ♙
const B_KING   = 7;  // "&#9818" ♚
const B_QUEEN  = 8;  // "&#9819" ♛
const B_ROOK   = 9;  // "&#9820" ♜
const B_BISHOP = 10; // "&#9821" ♝
const B_KNIGHT = 11; // "&#9822" ♞
const B_PAWN   = 12; // "&#9823" ♟

class Tabuleiro
{
    constructor()
    {
        this._tabuleiro = [];
        this._peca = [];
        this._rodada;
        this._fimJogo;
    }

    initialize()
    {
        this._rodada = 0;
        this._fimJogo = 0;
        var i, j;
        for(i = 0; i < 8; i++) 
        {
		    this._tabuleiro[i] = new Array(8);
            for(j = 0; j < 8; j++)
            {
                if(i===0)
                {
                    switch(j)
                    {
                        case 0: this._peca.push(new Torre("Preta", i, j, B_ROOK));
                                this._tabuleiro[i][j] = B_ROOK;
                                break;

                        case 1: this._peca.push(new Cavalo("Preta", i, j, B_KNIGHT));
                                this._tabuleiro[i][j] = B_KNIGHT;
                                break;

                        case 2: this._peca.push(new Bispo("Preta", i, j, B_BISHOP));
                                this._tabuleiro[i][j] = B_BISHOP;
                                break;

                        case 3: this._peca.push(new Rainha("Preta", i, j, B_QUEEN));
                                this._tabuleiro[i][j] = B_QUEEN;
                                break;

                        case 4: this._peca.push(new Rei("Preta", i, j, B_KING));
                                this._tabuleiro[i][j] = B_KING;
                                break;

                        case 5 :this._peca.push(new Bispo("Preta", i, j, B_BISHOP));
                                this._tabuleiro[i][j] = B_BISHOP;
                                break;

                        case 6: this._peca.push(new Cavalo("Preta", i, j, B_KNIGHT));
                                this._tabuleiro[i][j] = B_KNIGHT;
                                break;

                        case 7: this._peca.push(new Torre("Preta", i, j, B_ROOK));
                                this._tabuleiro[i][j] =B_ROOK;
                                break;
                    }
                }
                else if(i===1)
                {
                    this._peca.push(new Peao("Preta", i, j, B_PAWN));
                    this._tabuleiro[i][j] = B_PAWN;
                }
                else if(i===6)
                {
                    this._peca.push(new Peao("Branca", i, j, W_PAWN));
                    this._tabuleiro[i][j] = W_PAWN;
                }
                else if(i===7)
                {
                    switch(j)
                    {
                        case 0 :this._peca.push(new Torre("Branca", i, j, W_ROOK));
                                this._tabuleiro[i][j] = W_ROOK;
                                break;

                        case 1 :this._peca.push(new Cavalo("Branca", i, j, W_KNIGHT));
                                this._tabuleiro[i][j] = W_KNIGHT;
                                break;

                        case 2 :this._peca.push(new Bispo("Branca", i, j,  W_BISHOP));
                                this._tabuleiro[i][j] = W_BISHOP;
                                break;

                        case 3: this._peca.push(new Rainha("Branca", i, j, W_QUEEN));
                                this._tabuleiro[i][j] = W_QUEEN;
                                break;

                        case 4: this._peca.push(new Rei("Branca", i, j, W_KING));
                                this._tabuleiro[i][j] = W_KING;
                                break;

                        case 5: this._peca.push(new Bispo("Branca", i, j, W_BISHOP));
                                this._tabuleiro[i][j] = W_BISHOP;
                                break;

                        case 6 :this._peca.push(new Cavalo("Branca", i, j, W_KNIGHT));
                                this._tabuleiro[i][j] = W_KNIGHT;
                                break;

                        case 7 :this._peca.push(new Torre("Branca", i, j, W_ROOK));
                                this._tabuleiro[i][j] = W_ROOK;
                                break;
                    }
                }
                else
                {
                     this._tabuleiro[i][j] = 0; // ID_1 = 0
                }
            }    
	    }
    }

    get fimJogo()
    {
        return this._fimJogo;
    }

    addPeca(peca)
    {
        this._tabuleiro[peca._posI][peca._posJ] = peca._id;     
    }

    rmPeca(i,j)
    {   
        for(var x = 0; x < this._peca.length; x++)
        {
            if (i == this._peca[x].posI && j == this._peca[x].posJ)
            {
                if(this._tabuleiro[i][j]==B_KING)
                {
                    this._fimJogo=1;
                    this._rodada=2;
                }
                    
                if(this._tabuleiro[i][j]==W_KING)
                {
                    this._fimJogo=2;
                    this._rodada=2;
                }

                this._tabuleiro[i][j] = 0;
                this._peca.splice(x,1);
                break;
            }
                
        }        
    }

    getPeca(i,j)
    {   
        for (var x = 0; x < this._peca.length; x++)
        {
            if (i == this._peca[x].posI && j == this._peca[x].posJ && this._rodada == 0 && this._peca[x].id<=6 && this._peca[x].id != 0)
            {
                return this._peca[x];
            }
            else if(i == this._peca[x].posI && j == this._peca[x].posJ && this._rodada == 1 && this._peca[x].id>=7)
                return this._peca[x];
        }
        return null;
    }

    getRepresentacao()
    {
       
        for(var i = 0; i < 8; i++) 
        {
		    for(j = 0; j < 8; j++)
			    this._tabuleiro[i][j] = 0; // ID_1 = 0
	    }
    }

    // Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	getTabuleiro() 
	{
		// return tabuleiro.getRepresentacao();
		return this._tabuleiro;
	}

	// Esse método reinicia o jogo.
	reiniciar()
	{
        this.initialize();
    }
    
    moverPeca(peca, i, j)
    {
         if((peca.mover(this._tabuleiro, i, j))==false)
        {
            return false;
        } 
        else
        {
            if(this._tabuleiro[i][j] != 0)
            {
                this.rmPeca(i,j);
            }
            this._tabuleiro[peca.posI][peca.posJ] = 0;
            peca.posI = i;
            peca.posJ = j;            
            this.addPeca(peca);
            if(this._rodada == 0)
                this._rodada = 1;
            else if(this._rodada == 1)
                this._rodada = 0;
            
            return true;
        }
    }
}