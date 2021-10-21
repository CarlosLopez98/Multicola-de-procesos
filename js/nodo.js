function Nodo() {
	this.sig = null;
	this.ant = null;

	this.obj = null;

	this.hay_sig = () => {
		return this.sig != null;
	}

	this.hay_ant = () => {
		return this.ant != null;
	}
}