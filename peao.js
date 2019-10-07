class Peao extends Peca
{
    constructor(tipo, posI, posJ, id, cont)
    {
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro,i,j)
    {
        if(this.tipo == "Branca")//Branca
        {
            if((this.posI == 6) && (tabuleiro[5][j] == 0) && (tabuleiro[i][j] == 0) && j==this.posJ && i == 4 )//Peça branca move 2 para cima
            {
                return true;
            }
            if((this.posI - 1) == i)//Peça preta move 1 para cima
            {
                if(this.posJ == j && (tabuleiro[i][j] == 0))//Peao foi somente para frente
                {
                    return true;
                }
                else if((this.posJ - 1) == j)//Diagonal esquerda
                {
                    if(tabuleiro[i][j] >= 7 )//Peça preta
                    {
                        return true;
                    }
                    else//Peça branca ou vazio, movimento na diagonal ilegal
                    {
                            return false;
                    }
                }
                else if((this.posJ + 1) == j)//Diagonal direita
                {
                    if(tabuleiro[i][j] >= 7 )//Peça preta
                    {
                        return true;
                    }
                    else//Peça branca ou vazio, movimento na diagonal ilegal
                    {
                        return false;
                    }
                }
                else//Movimento fora do padrao, ilegal
                {
                    return false;
                }
            }
            else//Movimento para baixo ou fora do limite
            {
                return false;
            }
        }
        else if(this.tipo == "Preta")//Preta
        {
            if((this.posI == 1) && (tabuleiro[2][j] == 0) && (tabuleiro[i][j] == 0) && j==this.posJ && i==3 )//Peça branca move 2 para cima
            {
                return true;
            }
            if(((this.posI + 1) == i))//Peça preta move 1 para cima
            {
                if(this.posJ == j && (tabuleiro[i][j] == 0))//Peao foi somente para frente
                {
                    return true;
                }
                else if((this.posJ - 1) == j)//Diagonal esquerda
                {
                    if(tabuleiro[i][j] > 0 && tabuleiro[i][j] <= 6 )//Peça Branca
                    {
                        return true;
                    }
                    else//Peça Preta ou vazio, movimento na diagonal ilegal
                    {
                            return false;
                    }
                }
                else if((this.posJ + 1) == j)//Diagonal direita
                {
                    if(tabuleiro[i][j] > 0 && tabuleiro[i][j] <= 6 )//Peça branca
                    {
                        return true;
                    }
                    else//Peça Preta ou vazio, movimento na diagonal ilegal
                    {
                        return false;
                    }
                }
                else//Movimento fora do padrao, ilegal
                {
                    return false;
                }
            }
            else//Movimento para baixo ou fora do limite
            {
                return false;
            }
        }
        else//Movimento para baixo ou fora do limite
        {
            return false;
        }
    }
}