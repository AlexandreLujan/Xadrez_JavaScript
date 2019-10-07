class Peca
{
    constructor(tipo, posI, posJ, id)
    {
        this._tipo=tipo;
        this._posI=posI;
        this._posJ=posJ;
        this._id=id;
    }

    set tipo(tipo)
    {
        this._tipo=tipo;
    }
    set posI(posI)
    {
        this._posI=posI;
    }
    set posJ(posJ)
    {
        this._posJ=posJ;
    }
    set id(id)
    {
        this._id=id;
    }

    get tipo()
    {
        return this._tipo;
    }
    get posI()
    {
        return this._posI;
    }
    get posJ()
    {
        return this._posJ;
    }
    get id()
    {
        return this._id;
    }

    mover(tabuleiro,i,j)
    {
	    // Não pode mover uma peça para o mesmo lugar.
		if (this.posI == i && this.posJ == j)
            return false;
            
    }
}