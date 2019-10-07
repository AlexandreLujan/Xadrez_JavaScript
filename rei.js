class Rei extends Peca
{
    constructor(tipo, posI, posJ, id)
    {
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro,i,j)
    {
        if((this.posI + 1) == i && this.posJ == j)//Baixo
        {
            if(tabuleiro[i][j] == 0)
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else if((this.posI - 1) == i && this.posJ == j)//Cima
        {
            if(tabuleiro[i][j] == 0)
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else if(this.posI == i && (this.posJ + 1) == j)//Direita
        {
            if(tabuleiro[i][j] == 0)
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else if(this.posI == i && (this.posJ - 1) == j)//Esquerda
        {
            if(tabuleiro[i][j] == 0)
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
            {
                return true;
            }
            else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
}