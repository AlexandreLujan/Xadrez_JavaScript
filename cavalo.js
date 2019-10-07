class Cavalo extends Peca
{
    constructor(tipo, posI, posJ, id)
    {
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro,i,j)
    {
        if((this.posI + 2) == i && (this.posJ + 1) == j)
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
        else if((this.posI + 1) == i && (this.posJ + 2) == j)
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
        else if((this.posI - 1) == i && (this.posJ - 2) == j)
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
        else if((this.posI - 2) == i && (this.posJ - 1) == j)
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
        else if((this.posI - 2) == i && (this.posJ + 1) == j)
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
        else if((this.posI + 1) == i && (this.posJ - 2) == j)
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
        else if((this.posI - 1) == i && (this.posJ + 2) == j)
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
        else if((this.posI + 2) == i && (this.posJ - 1) == j)
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