class Torre extends Peca
{
    constructor(tipo, posI, posJ, id)
    {
        super(tipo, posI, posJ, id);
    }

    mover(tabuleiro,i,j)
    {
        let l = this.posI;
        let c = this.posJ;
        let flag = 0;
        if(l==i && c<j)//Direita
        {
            do
            {
                c++;
                if(tabuleiro[l][c]==0)
                    flag = 0;//Proxima posiçao nao tem nada
                else//proxima posicao tem uma peça
                {
                    if(c!=j)//nao é o lugar de chegada, peça no meio do caminho
                        flag = -1;
                    else//lugar de chegada com uma peça
                    {
                        //Peças de tipos diferentes
                        if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
                            flag = 1;
                        else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
                            flag = 1;
                        else//Mesmo tipos
                        {
                            flag = -1;
                        }
                    }
                }
            }while(c!=j && flag == 0);

            if(flag == 0 || flag == 1)
                return true;
            else 
                return false;
        }
        else if(l==i && c>j)//Esquerda
        {
            do
            {
                c--;
                if(tabuleiro[l][c]==0)
                    flag = 0;//Proxima posiçao nao tem nada
                else//proxima posicao tem uma peça
                {
                    if(c!=j)//nao é o lugar de chegada, peça no meio do caminho
                        flag = -1;
                    else//lugar de chegada com uma peça
                    {
                        //Peças de tipos diferentes
                        if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
                            flag = 1;
                        else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
                            flag = 1;
                        else//Mesmo tipos
                        {
                            flag = -1;
                        }
                    }
                }
            }while(c!=j && flag == 0);

            if(flag == 0 || flag == 1)
                return true;
            else 
                return false;
        }
        else if(l<i && c==j)//Baixo
        {
            do
            {
                l++;
                if(tabuleiro[l][c]==0)
                    flag = 0;//Proxima posiçao nao tem nada
                else//proxima posicao tem uma peça
                {
                    if(l!=i)//nao é o lugar de chegada, peça no meio do caminho
                        flag = -1;
                    else//lugar de chegada com uma peça
                    {
                        //Peças de tipos diferentes
                        if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
                            flag = 1;
                        else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
                            flag = 1;
                        else//Mesmo tipos
                        {
                            flag = -1;
                        }
                    }
                }
            }while(l!=i && flag == 0);

            if(flag == 0 || flag == 1)
                return true;
            else 
                return false;
        }
        else if(l>i && c==j)//Cima
        {
            do
            {
                l--;
                if(tabuleiro[l][c]==0)
                    flag = 0;//Proxima posiçao nao tem nada
                else//proxima posicao tem uma peça
                {
                    if(l!=i)//nao é o lugar de chegada, peça no meio do caminho
                        flag = -1;
                    else//lugar de chegada com uma peça
                    {
                        //Peças de tipos diferentes
                        if(tabuleiro[i][j] >= 7 && tabuleiro[i][j] <= 12 && this.tipo == "Branca")
                            flag = 1;
                        else if(tabuleiro[i][j] >= 0 && tabuleiro[i][j] <= 6 && this.tipo == "Preta")
                            flag = 1;
                        else//Mesmo tipos
                        {
                            flag = -1;
                        }
                    }
                }
            }while(l!=i && flag == 0);

            if(flag == 0 || flag == 1)
                return true;
            else 
                return false;
        }
        else//Fora das regras
        {
            return false;
        }
    }
}