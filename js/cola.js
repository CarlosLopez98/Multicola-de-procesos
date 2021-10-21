function Cola(ord=false){
	this.cab = new Nodo();
	this.cola = this.cab;
	this.tam = 0;
	this.ordenada = ord;

	this.ingresar = (nuevo) => {
		nodo = new Nodo();
		nodo.obj = nuevo;
		if(!this.ordenada){
			this.cola.sig = nodo;
			nodo.ant = this.cola;
			this.cola = nodo;
		}else{
			ant = this.cab;
			act = this.cab.sig;
			while(act != null && act.obj.rafaga <= nuevo.rafaga){
				ant = act;
				act = act.sig;
			}
			
			ant.sig = nodo;
			if(act != null)
				act.ant = nodo;
			else
				this.cola = ant;
			nodo.ant = ant;
			nodo.sig  = act;
		}

		this.tam++;
	}

	this.atender = () => {
		if(!this.estaVacia()){
			first = this.cab.sig;
			second = first.sig;
			if(this.tam == 1)
				this.cola = this.cab;
			else
				second.ant = this.cab;
			this.cab.sig = second;

			this.tam--;
			return first;
		}
		return null;
	}

	this.tamano = () => {
		return this.tam;
	}

	this.ultimo = () => {
		return this.cola;
	}

	this.estaVacia = () => {
		return this.cab.sig == null;
	}

	this.enlistar = () => {
		lista = [];
		aux = this.cab;
		while(aux.hay_sig()){
			aux = aux.sig;
			lista.push(aux);
		}

		return lista;
	}
}